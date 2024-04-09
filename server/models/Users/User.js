const mongoose = require('mongoose');

// creating the user Schema
const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    ProfileImage: {
        type: String,
    },
    BannerImage: {
        type: String,
    },
    ContactNumber: {
        type: String,
    } ,
    FacebookURL: {
        type: String,
    },
    LinkedInURL: {
        type: String,
    },
    TwitterURL: {
        type: String,
    },
    about: {
        type: String,
    },
    Blogs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Posts",
    }],
    BlogComments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }],
    BoughtBooks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Payment",
    }]
}, {
    timestamps: true,
})

// creating the User Model
const User = mongoose.model("User", UserSchema);

// exporting the User Model
module.exports = User;