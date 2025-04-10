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
        return res.status(200).json(posts.slice(0, limit));
    }
    
    res.status(200).json(posts);

    
});


// get single post
app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id); // id string is pares into integer. req.params take the param from the url
    
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({msg: `The post with id ${id} was not found`})
    }

    res.status(200).json(post);
})



app.listen(port, () => console.log(`Server is running on port ${port}`)
)