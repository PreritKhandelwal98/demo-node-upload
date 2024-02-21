const mongoose = require('mongoose');

const url="mongodb://localhost:27017/TestApiDb"

const connectDB = ()=>{
    console.log("connected");
    mongoose.connect(url);
}

module.exports = connectDB;