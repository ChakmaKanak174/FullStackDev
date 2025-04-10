import express from 'express';
const router = express.Router();


let posts = [
    { id: 1, title: 'Post one' },
    { id: 2, title: 'Post two' },
    {id: 3, title: 'Post three'}
]

// get all posts 
router.get('/', (req, res) => {
    
    const limit = parseInt(req.query.limit);

    if (!isNaN(limit) && limit > 0) {       // need to be very carefull in handling datatype because someone might want to inject SQL queries
        return res.status(200).json(posts.slice(0, limit));
    }
    
    res.status(200).json(posts);

    
});


// get single post
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id); // id string is paresd into integer. req.params take the param from the url
    
    const post = posts.find((post) => post.id === id);

    if (!post) {
        return res.status(404).json({msg: `The post with id ${id} was not found`})
    }

    res.status(200).json(post);
})



export default router;