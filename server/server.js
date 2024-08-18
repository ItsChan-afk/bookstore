const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

const PORT = process.env.PORT

app.use('/books', require('./routes/bookRoutes'))


app.listen(PORT, () => {
    console.log(`PORT ${PORT} has started`)
})