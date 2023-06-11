const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

//@desc register new user
//@route POST /api/users
//@access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, coach } = req.body

  if(!name || !email || !password) {
    res.status(400)
    throw new Error('Please add all fields!')
  }
  //check if user exists
  const userExists = await User.findOne({ email })

  if(userExists) {
    res.status(400)
    throw new Error('User already exists!')
  }

  //hash the password
  const salt = await bcrypt.genSalt(10)
  const hashedPW = await bcrypt.hash(password, salt) //will give us the hashed PW

  //create user
  const user = await User.create({
    name,
    email,
    password: hashedPW,
    coach
  })

  if(user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      coach: user.coach,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data!')
  }
})

//@desc authenticate a user
//@route POST /api/users/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body
  //check for user email
  const user = await User.findOne({ email })

  if(user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      coach: user.coach,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials!')
  }

})

//@desc get user's data
//@route POST /api/users/me
//@access Private
//how to protect a route:
const getMe = asyncHandler(async (req, res) => {
  res.json({ message: 'User Data' })
})

// Generate JWT

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d',

  })
}

module.exports = {
  registerUser,
  loginUser,
  getMe
}