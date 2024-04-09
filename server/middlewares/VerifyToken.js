require('dotenv').config();
const jwt = require('jsonwebtoken');
const AppErr = require('./AppErr');

// verifyToken
const VerifyToken = async(req, res ,next) => {
    try {
        // Assuming this JavaScript code is running on the client-side

        // Get the token from the cookies
        const token = req.headers.cookie.split('; ').find(row => row.startsWith('token=')).split('=')[1];
        
        // Check if token is present
        if (!token){
            return next(AppErr("Token not found", 401));
        }

        // Verify the token
        const decoded = await jwt.verify(token, process.env.SECRET_KEY);
        
        // Pass the decoded userId to the request headers  
        req.userId = decoded.userId;
        next();
    } catch (error) {
        console.log("Token verification failed:", error);
        return next(AppErr(error.message, 500));
    }
}

// exporting the module
module.export = VerifyToken;