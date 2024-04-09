const mongoose = require('mongoose');

// Books Schema
const BooksSchema = mongoose.Schema({
    title: {
        type:  String,
        required: true,
    },
    Genre: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    Pricing: {
        type: Number,
        required: true,
    },
    File: {
        type: String,
        required: true,
    },
    BookThumbnail: {
        type: String,
        required: true,
    },
    images: [{
        type: String,
    }],
    About: {
        type: String,
        required: true,
    },
    Likes: {
        type: Number,
        default: 0,
    },
    Rating: {
        type: Number,
        min: 0,
        max: 5,
    },
    Comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "BookComment",
    }],
    Author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true,
})

// creating the Books Model
const Books = mongoose.model("Books", BooksSchema);

// exporting the model
module.exports = Books;