const asyncHandler = require('express-async-handler')
const Books = require('../models/Books')

//Get Method
//To get All the Books
const getBooks = asyncHandler(async (req, res) => {

    const getDb = await Books.find()

    if (!getDb) {
        res.status(400)
        throw new Error("Bad request")
    }

    res.json(getDb)
})

//Get Method
//To Get Book with id
const getBook = asyncHandler(async (req, res) => {
    const { id } = req.params

    const getDb = await Books.findById(id)
    if (!getDb) {
        res.status(400)
        throw new Error("Couldnt Find Id")
    }
    res.json(getDb)
})

//Post Method
//To add books
const createBook = asyncHandler(async (req, res) => {
    const { bookname, author, publishYear } = req.body;
    console.log(req.body)

    //to check if data was empty
    if (!bookname || !author || !publishYear) {
        res.status(400)
        throw new Error("Bad Request")
    }

    const createDb = await Books.create({
        bookname,
        author,
        publishYear
    })

    if (!createDb) {
        res.status(400)
        throw new Error("Empty Credentials")
    }

    res.json(createDb)
})

//Put Method
//To update Book with id
const updateBook = asyncHandler(async (req, res) => {
    const { id } = req.params
    const { bookname, author, publishYear } = req.body

    const getDb = await Books.findByIdAndUpdate(id,
        {
            bookname,
            author,
            publishYear
        },
        {
            new: true,
            runValidators: true
        }
    )
    //to check if data was empty
    if (!bookname || !author || !publishYear) {
        res.status(400)
        throw new Error("Bad Request")
    }

    if (!getDb) {
        res.status(400)
        throw new Error("Couldnt Find Id")
    }



    res.json(getDb)
})

//Delete Method
//To delete Book with id
const deleteBook = asyncHandler(async (req, res) => {
    const { id } = req.params

    const getDb = await Books.findByIdAndDelete(id)
    if (!getDb) {
        res.status(400)
        throw new Error("Couldnt Find Id")
    }

    res.json(getDb)
})


module.exports = { getBooks, getBook, createBook, updateBook, deleteBook }