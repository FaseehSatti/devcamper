const express =require('express'); 
const dotenv =require('dotenv'); 
const morgan = require('morgan');
const logger = require('./middleware/logger');
const connectDB = require('./config/db')
const bootcamps = require('./routes/bootcamps.js');
const colors = require('colors');

dotenv.config({path:'./config/config.env'});

const app = express();
app.use(express.json())
if(process.env.NODE_ENV === "development"){
    app.use(morgan('dev'));  
}

connectDB();

app.use(logger);
app.use("/api/v1/bootcamps",bootcamps);
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow));

process.on('unhandledRejection' , (err , promise) => {
    console.log(`Error : ${err.message}`);
    server.close(() => process.exit(1));
})