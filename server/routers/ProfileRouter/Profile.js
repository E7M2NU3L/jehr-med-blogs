const express = require('express');

const ProfileRouter = express.Router();

// routes

// 1. Upload Profile Image
ProfileRouter.post("/upload-profile-picture", );

// 2. Upload Banner picture
ProfileRouter.post("/upload-banner-picture", );

// 3. Update Profile
ProfileRouter.put("/",);

// 4. get Profile
ProfileRouter.get("/");

// 5. Delete Profile
ProfileRouter.delete("/");

// exporting the Router
module.exports = ProfileRouter