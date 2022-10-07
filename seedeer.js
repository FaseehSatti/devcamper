// const mongoose = require('mongoose');
// const fs = require('fs');
// const dotenv = "dotenv";
// const colors = "colors"
// //load env vars
// dotenv.config({path : './config/config.env'})
// // load models
// const Bootcamp = require('./models/Bootcamp'); 
// // const { argv } = require('process');
// mongoose.connect(process.env.MONGO_URI , {
//         useNewUrlParser : true,
//         useCreateIndex : true,
//         useFindAndModify: false,
//         useUnifiedTopolgy : true
// }   );

// const bootcamps = JSON.parse(fs.readFileSync(`${__dirname}/_data/bootcamps.json`,`utf-8`)
// );

// const importData = async()=>{
//     try{
//         await Bootcamp.create(bootcamps);
//         console.log('DATA IMPORTED...'.green.inverse);
//         process.exit();
//     }catch(err){
//         console.log(err);
//     }
// }

// //delete data
// const deleteData =async () =>{
//     try{
//         await Bootcamp.deleteMany();
//         console.log("DATA DESTROYED..".red.inverse);
//         process.exit();
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// if(process.argv[2] === '-i'){
//     importData();
// }
// else if(process.argv[2] === '-d'){
//     deleteData();
// }