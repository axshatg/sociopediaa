import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */

// will show each and every post available in the database
router.get("/", verifyToken, getFeedPosts);

// will show only the posts related to the current user
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */

// will update the like count of the post
router.patch("/:id/like", verifyToken, likePost);

export default router;
