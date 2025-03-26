import http from 'http';

const PORT = 8000;
const server = http.createServer((req, res) => {
    // res.setHeader('Content-type', 'text/html')
    // res.statusCode = 404;
    // res.write();

    res.writeHead(500, { 'Content-Type': 'application/json' });

    res.end(JSON.stringify({ message: 'server error' }));
});

server.listen(PORT, () => {
    console.log(`Server ruuning on port ${PORT}`);
})