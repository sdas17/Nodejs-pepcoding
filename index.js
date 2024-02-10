const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, http server coding');
    console.log(req.method);
    console.log(req.url);
});

server.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
