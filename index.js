const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    let path = './views/demo';

    switch (req.url) {
        case '/':
            path += '/demo.html';
            break;
        case '/errors':
            path += '/error.html';
            break;
        default:
            path += '/demo.html';
            break;
    }
     fs.readFile(path, (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
    // fs.readFile('./views/demo.html', 'utf8', (err, data) => {
    //     if (err) {
    //         console.error('Error reading the file:', err);
    //         res.writeHead(500, { 'Content-Type': 'text/plain' });
    //         res.end('Internal Server Error');
    //     } else {
    //         res.writeHead(200, { 'Content-Type': 'text/html' });
    //         res.end(data);
    //     }
    // });
});

server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
