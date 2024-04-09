const express = require('express');

const UserRouter = express.Router();

// Routes

// 1. Login Route
UserRouter.post("/login",);

// 2. Register Route
UserRouter.post("/register",);

// 3. Logout Route
UserRouter.post("/logout",);

// 4. Password Reset Otp Generate Route
UserRouter.post("/password-reset-otp",);

// 5. Password Reset Route
UserRouter.post("/password-reset");

// 6. Email Confirm Otp Generate Route
UserRouter.post("/email-confirm-otp", );

// 7. Email Confirm Route
UserRouter.post("/email-confirm",);

module.exports = UserRouter;