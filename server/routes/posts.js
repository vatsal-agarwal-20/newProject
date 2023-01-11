import express from "express";

import {
    getFeedPosts,
    getUserPosts,
    likePost
} from "../controllers/posts.js"
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */

// This will showcase all the posts in the homepage
router.get("/", verifyToken, getFeedPosts);

// this call is for when we enter another user's profile
// and there we will see their posts listed in the profile 
// just like any social media app
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */

// this is for liking or unliking the post
router.patch("/:id/like", verifyToken, likePost);

export default router;