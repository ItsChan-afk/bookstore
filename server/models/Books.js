const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    bookname: {
        type: String,
        required: [true, "Books field is necessary"]
    },
    author: {
        type: String,
        required: [true, "Authors field is necessary"]
    },
    publishYear: {
        type: String,
        required: [true, "Publish year is necessary"]
    }
}, {
    timeStamps: true
})

const Books = mongoose.model('Books', BookSchema)
module.exports = Books;