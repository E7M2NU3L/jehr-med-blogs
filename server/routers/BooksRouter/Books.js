const express = require('express');

const BooksRouter = express.Router();

// routes
// 1. Create a new Book
BooksRouter.post('/');

// 2. Delete a Book
BooksRouter.delete('/');

// 3. Update a Book
BooksRouter.update('/');

// 4. Fetch single Book
BooksRouter.get('/:id');

// 5. Fetch All Books
BooksRouter.get("/");

// Like
BooksRouter.put('/like',);

module.exports = BooksRouter;