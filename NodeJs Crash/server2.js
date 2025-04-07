import { createServer } from 'http';
import { json } from 'stream/consumers';

const PORT = process.env.PORT;

const users = [{ id: 1, name: 'Kanak Chakma' },    //Usually these are retrived from the database
    { id: 2, name: 'Snigdha Chakma' },
    {id: 3, name: 'Ranbir Chakma'}
];


const server = createServer((req, res) => {
    if (req.url === '/api/users' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === 'GET') {
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
    } else {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 404
        res.write(JSON.stringify({ message: 'Route Not Found' }));
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})