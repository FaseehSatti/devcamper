const errorResponse = require("../utils/errorResponse");

const errorHandler = (err, req,res,next) =>{
    let error ={...err};
    error.message = err.message;
    //log to console
    console.log(err );
    console.log(err.name);
    if(err.name === "CastError" ){
        const message =`Bootcamp not found with id of ${err.value}`;
        error = new errorResponse(message,404);
    }

    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message)
        error = new errorResponse(message,400);
    }
    res.status(error.statusCode || 500).json({
        success :false,
        msg: error.message || "Server Error"
    });
}
module.exports = errorHandler;  