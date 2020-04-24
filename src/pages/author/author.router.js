const fs = require('fs');
const path = require('path');
const allBooks = require('../../../data/books.json');
const router = require('express').Router();

router.get('/:name', (req, res) => {
    const name = req.params.name;
    const filtered = allBooks.filter(book => book.authors.includes(name));
    res.render(path.join(__dirname, 'templates', 'main.ejs'), {books: filtered});
});

module.exports = router;