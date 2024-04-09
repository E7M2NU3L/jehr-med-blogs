require('dotenv').config()

const genOTPForVerify = () => {

    // generating the strings
    const smallAlphabets = process.env.char3 
    const CapsAlphabets = process.env.char4
    const Numbers = process.env.num2

    // generating the random value
    const random_small = Math.floor(Math.random() * smallAlphabets.length); 
    
    const random_caps = Math.floor(Math.random() * 
        CapsAlphabets.length
    );
    const random_Number = Math.floor(Math.random() * Numbers.length);

    // list to store the otp
    const OTP_Array = [smallAlphabets[random_small], random_small, CapsAlphabets[random_caps], random_caps, random_Number, Numbers[random_Number]];

    // merge the OTP_Array into a single string
    const otp = OTP_Array.join('').toString();

    // strip the otp
    const otp_gen = otp.slice(0,6);
    return otp_gen    
}

// exporting the module
module.exports = genOTPForVerify;