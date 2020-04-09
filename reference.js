const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
    fs.readFile('index.html', {encoding: 'UTF-8'}, (err, content) => {
        if (err) {
            res.status(404);
            res.setHeader('Content-Type', 'text/plain');
            res.write('Content not found');
        } else {
            res.setHeader('Content-Type', 'text/html');
            res.write(content);
        }
        res.end();
    });
});

app.listen(3000, () => console.log('app listening on port: 3000'));