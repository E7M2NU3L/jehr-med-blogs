// rewuiring installled modules
require('dotenv').config();
const jwt = require('jsonwebtoken');

// generating the token
const GenToken = (userid) => {
    const token = jwt.sign(
        { userId: userid }, process.env.SECRET_KEY, {
            expiresIn: '5d',
        }
    );

    if (!token){
        console.error('Could not generate token');
    }
    
    return token;
}

// exporting the module
module.exports = GenToken;