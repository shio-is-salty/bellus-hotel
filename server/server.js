const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
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

app.get('/register', async (req, res) => {
  try{
    const userDoc = await User.find({}).sort({createdAt: -1})
    res.json(userDoc)
  }catch(e){
    res.status(422).json(e)
  }
})

app.listen(process.env.PORT, () => {
  console.log(`Listening at port: ${process.env.PORT}`)
})

