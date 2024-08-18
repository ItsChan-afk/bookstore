const express = require('express')
const router = express.Router()
const { getBooks,  createBook, updateBook, deleteBook, getBook } = require('../controllers/bookController')


router.get('/', getBooks)

router.post('/', createBook)

router.put('/:id', updateBook)

router.delete('/:id', deleteBook)

router.get('/:id', getBook)


module.exports = router