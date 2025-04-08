import { createServer } from 'http';

const PORT = process.env.PORT;

const users = [{ id: 1, name: 'Kanak Chakma' },    //Usually these are retrived from the database
    { id: 2, name: 'Snigdha Chakma' },
    {id: 3, name: 'Ranbir Chakma'}
];


//Logger middleware

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
    
}

//Json middleware

const jsonMiddleware = (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
}


// Route handler for GET /api/users 
const getUserHandler = (req, res) => {
    res.write(JSON.stringify(users));
    res.end();
}


// Route handler for GET /api/users/:id

const getUserById = (req, res) => {
    const id = req.url.split('/')[3];
    const user = users.find((user) => user.id === parseInt(id));
    res.setHeader('Content-Type', 'application/json')
    if (user) {
        res.write(JSON.stringify(user));
    } else {
        res.statusCode = 404;
        res.write(JSON.stringify({message: 'User Not Found'}))
    }
    res.end();       
}


// Not found handler

const notFoundHandler = (req, res) => {
    res.statusCode = 404
    res.write(JSON.stringify({ message: 'Route Not Found' }));
    res.end();
}


// Route handler for POST /api/users

const createUserHandler = (req, res) => {
    let body = '';
    // listen for data

    req.on('data', (chunk) => {
        body += chunk.toString()
    });

    req.on('end', () => {
        const newUser = JSON.parse(body);
        users.push(newUser);
        res.statusCode = 201;
        res.write(JSON.stringify(newUser));
        res.end();
    });
}


const server = createServer((req, res) => {
    logger(req, res, () => {
        jsonMiddleware(req, res, () => {
            if (req.url === '/api/users' && req.method === 'GET') {
                getUserHandler(req, res);
            } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
                getUserById(req, res);
            } else if (req.url === '/api/users' && req.method === 'POST') { 
                createUserHandler(req, res);
            }
            else {
                notFoundHandler(req, res);
            }
        })
    })
});        
        //     if (req.url === '/api/users' && req.method === 'GET') {
        //         res.setHeader('Content-Type', 'application/json');
        //         res.write(JSON.stringify(users));
        //         res.end();
        //     } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
        //         const id = req.url.split('/')[3];
        //         const user = users.find((user) => user.id === parseInt(id));
        //         res.setHeader('Content-Type', 'application/json')
        //         if (user) {
        //             res.write(JSON.stringify(user));
        //         } else {
        //             res.statusCode = 404;
        //             res.write(JSON.stringify({message: 'User Not Found'}))
        //         }
    
        //         res.end();
        //     } else {
        //         res.setHeader('Content-Type', 'application/json');
        //         res.statusCode = 404
        //         res.write(JSON.stringify({ message: 'Route Not Found' }));
        //         res.end();
        //     }
        // })


server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})