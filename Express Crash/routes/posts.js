import express from 'express';
import {getPost, getPosts, createPost, updatePost, deletePost} from '../controllers/postController.js'

const router = express.Router();








// get all posts 
router.get('/', getPosts);


// get single post
router.get('/:id', getPost)


// create new post

router.post('/', createPost)

// Put request

router.put('/:id', updatePost)

// delete request

router.delete('/:id', deletePost)


export default router;