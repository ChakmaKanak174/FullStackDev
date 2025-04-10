const express = require('express');
const path = require('path');
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

let posts = [
    { id: 1, title: 'Post one' },
    { id: 2, title: 'Post two' },
    {id: 3, title: 'Post three'}
]


// get all posts 
app.get('/api/posts', (req, res) => {
    
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {       // need to be very carefull in handling datatype because someone might want to inject SQL queries
        res.json(posts.slice(0, limit));
    }
    else {
        res.send(posts);
    }
    
});


// get single post
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id); // id string is pares into integer. req.params take the param from the url
    res.json(posts.filter((post) => post.id === id)); // posts array is filtered and checked if the ID matches with the ID from URL
})



app.listen(port, () => console.log(`Server is running on port ${port}`)
)