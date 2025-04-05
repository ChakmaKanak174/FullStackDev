// import http from 'http';

// const PORT = 8000;
// const server = http.createServer((req, res) => {
//     // res.setHeader('Content-type', 'text/html')
//     // res.statusCode = 404;
//     // res.write();

//     res.writeHead(500, { 'Content-Type': 'application/json' });

//     res.end(JSON.stringify({ message: 'server error' }));
// });

// server.listen(PORT, () => {
//     console.log(`Server ruuning on port ${PORT}`);
// })

import http from 'http';
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
    // res.write("Hello World");

    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;


    console.log(req.url);
    console.log(req.method);
    
    

    res.writeHead(200, { 'content-type': 'text/html' });
    // res.end(JSON.stringify({message : 'Server Error'})); //Does the same thing as res.write()
    res.end('<h1>Hello World</h1>');
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
});