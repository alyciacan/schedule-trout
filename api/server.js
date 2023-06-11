const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config() //allows us to have a .env with our variables in it
const port = process.env.PORT || 5000
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const cors = require('cors')

connectDB()

const app = express()

app.use(express.json())

app.use(express.urlencoded({ extended: true }))
app.use(cors({
  origin: 'http://localhost:5173'
}))
app.use('/api/coaches', require('./routes/coachRoutes')) //now when we hit this endpoint, it will look at this file
app.use('/api/availabilitywindows', require('./routes/availabilityWindowRoutes'))
app.use('/api/appointments', require('./routes/appointmentRoutes'))
app.use('/api/users', require('./routes/userRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))