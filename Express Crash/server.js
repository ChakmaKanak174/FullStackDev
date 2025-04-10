import express from 'express';
import path from 'path';
import posts from './routes/posts.js' // router module 

const port = process.env.PORT || 8000;

const app = express();

// setup static folder in case of having lot of html files that need to be routed one by one

// app.use(express.static(path.join(__dirname, 'public'), {extensions: ['html']} ))


// no need to manually check the req.method like in the base node
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// app.get('/about', (req, res) => {
//     res.send('About');
// })

// routes are imported and used here using use method and it is used as middleware. 

app.use('/api/posts', posts);


app.listen(port, () => console.log(`Server is running on port ${port}`)
)