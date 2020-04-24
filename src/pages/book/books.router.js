const fs = require('fs');
const path = require('path');
const allBooks = require('../../../data/books.json');
const router = require('express').Router();
const bookController = require('./book.controller');

router.post('/', bookController.addBook);

router.get('/add', (req, res) => {
    res.render(path.join(__dirname, '../..', 'templates', 'addbook.ejs'));
});

router.get('/:id', bookController.getBook);

router.get('/', (req, res) => {
    res.render(path.join(__dirname, '../..', 'templates', 'main.ejs'), { books: allBooks });
})

module.exports = router;