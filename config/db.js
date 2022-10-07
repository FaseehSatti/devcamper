const mongoose = require('mongoose');
// const fs = require('fs');
// const dotenv = "dotenv";
// const colors = "colors"
// //load env vars
// dotenv.config({path : './config/config.env'})
const connectDB = async () =>{
    const conn = await mongoose.connect(process.env.MONGO_URI , {
        useNewUrlParser : true,
        // useCreateIndex : true,
        // useFindAndModify: false,
        // useUnifiedTopolgy : true
    });
    console.log(`MongoDB Connected : ${conn.connection.host}`.blue)
}
module.exports = connectDB;