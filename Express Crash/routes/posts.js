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
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id); // id string is paresd into integer. req.params take the param from the url
    
    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`The post with id ${id} was not found`);
        error.status = 404;
        return next(error);
    }

    res.status(200).json(post);
})


// create new post

router.post('/', (req, res, next) => {
    const newPost = {
        id: posts.length + 1,
        title: req.body.title
    };
    
    if (!newPost.title) {
        const error = new Error('Please input a title');
        error.status = 400;
        return next(error);
    } 
    
    posts.push(newPost);

    res.status(201).json(posts);
})

// Put request

router.put('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);

    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`A post with ${id} id was not found.`)
        error.status = 404;
        return next(error)
    }

    post.title = req.body.title;
    res.status(200).json(posts); 

})

// delete request

router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);

    const post = posts.find((post) => post.id === id);

    if (!post) {
        const error = new Error(`A post with ${id} id was not found.`)
        error.status = 400;
        return next(error);
    }

    posts = posts.filter((post) => post.id !== id)

    res.status(200).json(posts);
})


export default router;