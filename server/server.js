const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const imageDownloader = require('image-downloader')
const multer = require('multer')
const fs = require('fs')
const app = express()
require('dotenv').config()


//Models
const User = require('./Model/User')

//Middlewares
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))
app.use(cookieParser())
app.use('/uploads', express.static(__dirname+'/uploads'))

const bcryptSalt = bcrypt.genSaltSync(10)
const jwtSecret = 'asdjqwoisszn12346341'

mongoose.connect(process.env.MONGO_URL)

app.post('/register', async (req, res) => {
  const {name, email, password} = req.body
  try{
    const userDoc = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, bcryptSalt)
    })
    res.json(userDoc)
  }catch(e){
    res.status(422).json(e)
  }
})

app.post('/login', async (req, res) => {
  const {email, password} = req.body
  const userDoc = await User.findOne({email})

  if(!userDoc){
    console.log('User not found.')
    res.status(422).json('User not found.')
    return
  }

  const passOk = bcrypt.compareSync(password, userDoc.password)

  if(!passOk){
    console.log('Incorrect password.')
    res.status(422).json('Incorrect password.')
    return
  }

  jwt.sign({email:userDoc.email, id:userDoc._id}, jwtSecret, {}, (err, token) => {
    if(err) throw err
    res.cookie('token', token).json(userDoc)
  })


})

app.post('/logout', (req, res) => {
  res.cookie('token', '').json(true)
})


app.post('/upload-by-link', async (req, res) => {
  const {link} = req.body
  const newName = 'photo'+Date.now() + '.jpg'
  await imageDownloader.image({
    url:link,
    dest:__dirname+'/uploads/'+newName
  })

  res.json(newName)
})

const photosMiddleware = multer({dest: 'uploads/'})
app.post('/upload', photosMiddleware.array('photos', 100), (req,res) => {
  const uploadedFiles = []
  for(let i=0; i<req.files.length; i++){
    const {path, originalname} = req.files[i]
    const parts = originalname.split('.')
    const ext = parts[parts.length - 1]
    const newPath = path+"."+ext
    fs.renameSync(path, newPath)
    uploadedFiles.push(newPath.replace('uploads/', ''))
  }

  res.json(uploadedFiles)

})


app.listen(process.env.PORT, () => {
  console.log(`Listening at port: ${process.env.PORT}`)
})

