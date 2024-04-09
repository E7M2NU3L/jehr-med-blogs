require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const cors = require('cors');
const Dbconnect = require('./config/DbConnect');
const GlobalAppErr = require('./utils/GlobalAppErr');
const UserRouter = require('./routers/UsersRouter/Users');
const BooksRouter = require('./routers/BooksRouter/Books');
const BlogsRouter = require('./routers/BlogsRouter/Blogs');
const PaymentRouter = require('./routers/PaymentRouter/Payment');
const ProfileRouter = require('./routers/ProfileRouter/Profile');
const CommentRouter = require('./routers/CommentRouter/Comment');
const BookCommentRouter = require('./routers/BookCommentsRouter/BookComments');

// app instance
const app = express();

// connecting to the Db
Dbconnect();

// middlewares

// 1. pass json data
app.use(bodyparser.json());

// 2. pass form data
app.use(bodyparser.urlencoded({
    extended: true,
}));

// 3. cors Error handling
app.use(cors());

// 4. cookie parser middleware
app.use(cookieparser());

// routers

// 1. User Routes
app.use('/api/v1/users/auth', UserRouter);

// 2. Books Router
app.use('/api/v1/books', BooksRouter);

// 3. Blogs Router
app.use('/api/v1/blogs', BlogsRouter);

// 4. Payment
app.use('/api/v1/payment', PaymentRouter);

// 5. Profile Routes
app.use('/api/v1/users/profile', ProfileRouter);

// 6. Comments Router
app.use('/api/v1/comments', CommentRouter);

// 7. Book Comments Router
app.use('/api/v1/book-comments', BookCommentRouter);

// Global Error Handler
app.use(GlobalAppErr());

// starting the server
const port = process.env.PORT;
app.listen(port, () => {
    console.log('listening on port ' + port);
})