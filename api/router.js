const router = require("express").Router();
const postController = require("./post.contoller");

// Members
router.get("/api/posts", postController.getAllPosts);

module.exports = router;
