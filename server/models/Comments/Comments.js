const mongoose = require('mongoose');

// Comment Schema
const CommentSchema = mongoose.Schema({
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
    Replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ReplyComment"
    }],
    Author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}, {
    timestamps: true,
});

// Comment Model
const CommentModel = mongoose.Model("Comment", CommentSchema);

// exporting the model
module.exports = CommentModel;