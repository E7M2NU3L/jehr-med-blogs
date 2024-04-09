const express = require('express');

const CommentRouter = express.Router();

// routes
// 1. Create a new Comment
CommentRouter.post('/');

// 2. Delete a Comment
CommentRouter.delete('/');

// 3. Update a Comment
CommentRouter.update('/');

// 4. Fetch single Comment
CommentRouter.get('/:id');

// 5. Fetch All Comments
CommentRouter.get("/");

// 6. Reply to Comment
CommentRouter.post('/:id/reply-comment',);

// 7. Like Comment
CommentRouter.put('/like',);

// 8. Like a Replied Comment
CommentRouter.put('/:id/reply-comment/like',);

module.exports = CommentRouter;