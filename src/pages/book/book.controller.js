const fs = require('fs');
const path = require('path');
const dataFile = '../../../data/books.json';
const allBooks = require(dataFile);

const addBook = (req, res, next) => {
    const newBook = {
        id: '' + allBooks.length,
        title: req.body.title,
        authors: [req.body.author],
        description: req.body.description,
        imageLinks: {
            thumbnail: req.body.thumbnail
        }
    };
    allBooks.push(newBook);
    const content = JSON.stringify(allBooks)
    fs.writeFile(dataFile, content, (err) => {
        if (err) {
            return next(err);
        }
        res.redirect('/');
    });
};

const getBook = (req, res, next) => {
    const id = req.params.id;
    const book = allBooks.find(book => book.id === id);
    res.render(path.join(__dirname, '../..', 'templates', 'detail.ejs'), {book: book});
}

module.exports = {
    getBook: getBook,
    addBook: addBook
}