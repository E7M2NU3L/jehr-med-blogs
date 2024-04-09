const mongoose = require("mongoose");

// creating the Posts Schema
const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    content: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
    },
    ThumbnailImage: {
        type: String,
    },
    PostImages: [{
        type: String,
    }],
    PostVideos: [{
        type: String,
    }],
    Likes: {
        type: Number,
        default: 0,
    },
    Author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    Comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }
}, {
    timestamps: true,
});

// creating the Posts Models
const Posts = mongoose.model('Posts', PostSchema);

// export the models
module.exports = Posts;