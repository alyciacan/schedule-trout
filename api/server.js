const express = require('express')
const dotenv = require('dotenv').config() //allows us to have a .env with our variables in it
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: false }))

app.use('/api/coaches', require('./routes/coachRoutes')) //now when we hit this endpoint, it will look at this file

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))