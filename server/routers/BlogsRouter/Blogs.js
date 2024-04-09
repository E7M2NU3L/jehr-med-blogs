const express = require('express');
const { CreateBlog, DeleteBlog, UpdateBlog, FetchSingleBlogs, FetchBlogs } = require('../../controllers/Blogs/BlogsCtrl');

const BlogsRouter = express.Router();

// routes

// 1. Create a new blog
BlogsRouter.post('/', CreateBlog);

// 2. Delete a blog
BlogsRouter.delete('/', DeleteBlog);

// 3. Update a blog
BlogsRouter.update('/:id', UpdateBlog);

// 4. Fetch single Blog
BlogsRouter.get('/:id', FetchSingleBlogs);

// 5. Fetch All Blogs
BlogsRouter.get("/"), FetchBlogs;

module.exports = BlogsRouter;