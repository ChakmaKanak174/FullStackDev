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
import fs from 'fs/promises';
import url from 'url'; // to access __filename and __dirname
import path from 'path';

const PORT = process.env.PORT;



//Get current path
// __filename
// __dirname //available only when commonjs is being used.

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async(req, res) => {
    // res.write("Hello World");

    // res.setHeader('Content-Type', 'text/html');
    // res.statusCode = 404;

    try {
        //check if the request is a get request
        if (req.method === 'GET') {
            let filePath;
            if (req.url === '/') {
                filePath = path.join(__dirname, "Public", "index.html");
                
            } else if (req.url === '/about') {
                filePath = path.join(__dirname, "Public", "about.html");
            } else {
                throw new Error("Not Found");
            }

            const data = await fs.readFile(filePath);
            res.setHeader("Content-Type", "text/html");
            res.write(data);
            res.end();


        } else {
            throw new Error('Method not allowed');
        }
    } catch (error) {
        res.writeHead(500, { 'content-type': 'text/plain' });
        res.end('Server Error');
        
    }



    

    // console.log(req.url);
    // console.log(req.method);
    
    

    
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
});