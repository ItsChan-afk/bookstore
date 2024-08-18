const express = require('express')
const ErrorHandler = require('./middleware/ErrorHandler')
const app = express()
const dotenv = require('dotenv').config()
const dbConnection = require('./dbConnection/dbConnection')
const cors = require('cors')

const PORT = process.env.PORT

app.use(express.json())
app.use(cors())
app.use('/books', require('./routes/bookRoutes'))
dbConnection()
app.use(ErrorHandler)


app.listen(PORT, () => {
    console.log(`PORT ${PORT} has started`)
})