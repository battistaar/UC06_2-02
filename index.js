const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const allBooks = require('./data/books.json');
const booksRouter = require('./src/pages/book/books.router'); 
const authorRouter = require('./src/pages/author/author.router');

const app = express();
app.set('view engine', 'ejs');

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.redirect('/books');
});

app.use('/books', booksRouter);
app.use('/authors', authorRouter);



app.get('/test', (req, res) => {
    res.status(200);
    res.send('pagina test');
});

app.listen(3000, () => console.log('listening on port 3000'));