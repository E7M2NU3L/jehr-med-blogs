require('dotenv').config();
const mongoose = require('mongoose');

const Dbconnect = async() => {
    const url = process.env.Mongo_url;

    // conector
    await mongoose.connect(url).then(() => {
        console.log("Db connection has been successfully established");
    }).catch((err) => {
        console.log("Error connecting to MongoDB server");
        console.log(err.message);
    })
}

module.exports = Dbconnect;