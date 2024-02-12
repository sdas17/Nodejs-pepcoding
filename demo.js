const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    fs.readFile('./views/demo/demo.html', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(200).send(data);
        }
    });
});

app.get('/about-me', (req, res) => {
    fs.readFile('./views/demo/demo2.html', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.redirect('/');
        }
    });
});

app.get('/errors', (req, res) => {
    fs.readFile('./views/demo/error.html', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            res.status(500).send('Internal Server Error');
        } else {
            res.status(400).send(data);
        }
    });
});

// Handle other routes
app.use((req, res) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log(`Express server is listening at http://localhost:${port}`);
});
