//Get Method
//To get All the Books
const getBooks = (req, res) => {
    res.json({ message: 'Get all the books' })
}

//Get Method
//To Get Book with id
const getBook = (req, res) => {
    const {id} = req.params
    res.json({ message: `Get Books at id ${id}` })
}

//Post Method
//To add books
const createBook = (req, res) => {
    res.json({ message: "Created the books successfully" })
}

//Put Method
//To update Book with id
const updateBook = (req, res) => {
    const {id} = req.params
    res.json({ message: `Updated Books at id ${id}` })
}

//Delete Method
//To delete Book with id
const deleteBook = (req, res) => {
    const {id} = req.params
    res.json({ message: `Deleted Books at id ${id}` })
}


module.exports = {getBooks , getBook , createBook , updateBook , deleteBook}