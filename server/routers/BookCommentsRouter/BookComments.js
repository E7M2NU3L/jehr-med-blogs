const express = require('express');
const { CreateBook, DeleteBook, UpdateBook, FetchSingleBook, FetchBook } = require('../../controllers/BookCtrl/Books');

const BookCommentRouter = express.Router();

// routes
// 1. Create a new Book Comment
BookCommentRouter.post('/', CreateBook);

// 2. Delete a Book Comment
BookCommentRouter.delete('/', DeleteBook);

// 3. Update a Book Comment
BookCommentRouter.update('/:id', UpdateBook);

// 4. Fetch single Book Comment
BookCommentRouter.get('/:id', FetchSingleBook);

// 5. Fetch All Books Comment
BookCommentRouter.get("/", FetchBook);

// 6. Like Comment
BookCommentRouter.put('/like',);


module.exports = BookCommentRouter;