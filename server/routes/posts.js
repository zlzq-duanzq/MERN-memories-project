import express from "express";
import { getPosts, getPostsBySearch , createPost, updatePost, deletePost, likePost } from "../controllers/posts.js";
const router = express.Router();
// http://localhost:5200/posts
router.get('/', getPosts);
router.get('/search', getPostsBySearch);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;