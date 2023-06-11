const jwt = require('jwt')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

const protect = asyncHandler(async(req, res, next) => {
  let token

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      //get token from header
      token = req.headers.authorization.split(' ')[1]

      //verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET) // will decode the payload 

      //get user from the token
      req.user = await User.findById(decoded.id)
      
    } catch (error) {
      
    }
  }
})

module.exports = { protect }