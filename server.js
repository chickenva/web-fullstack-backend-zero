const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    req.setHeader('Content-Type', 'text/plain');
    req.end('Hello World\n Hoi Dan IT voi Eric');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
})