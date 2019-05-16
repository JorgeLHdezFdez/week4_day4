const express = require('express')
const router = express.Router()

const Book = require('../models/book')






router.get('/', (req, res, next) => res.render('books-index'))

router.get('/list', (req, res, next) => {                             // ESTO ES EL CONTROLADOR
  Book.find()                                                         // ESTO ES EL MODELO
    .then(allBooks => res.render('books-list', { books: allBooks }))  // ESTO ES LA VISTA
    .catch(error => console.log(error))
})





router.get('/view/:book_id', (req, res) => {

  //const id = req.params.book_id
  Book.findById(req.params.book_id)
    .then(theBook => res.render('book-detail', { book: theBook }))
    .catch(error => console.log(error))
})




module.exports = router