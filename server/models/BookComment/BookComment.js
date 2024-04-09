const mongoose = require('mongoose');

// Comment Schema
const BookCommentSchema = mongoose.Schema({
    Comment: {
        type: String,
        required: true
    },
    images: [{
        type: String,
    }],
    gifs: [{
        type: String,
    }],

    Likes: {
        type: Number,
        default: 0,
    },
    Author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true,
});

// Comment Model
const BookComment = mongoose.Model("BookComment", BookCommentSchema);

// exporting the model
module.exports = BookComment;