const Bootcamp =require ("../models/Bootcamp");
const errorResponse =require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
// @desc Get all bootcamps
// @route Get api/v1/bootcamps
// @Access Public

exports.getBootcamps = asyncHandler(async(req,res,next) =>{
    let query;
    let queryStr= JSON.stringify(req.query);
    // queryStr= queryStr.replace(/\b(gt|gte|lt|lte|in))
    // try{
        const bootcamps = await Bootcamp.find();
        res.status(200).json({success:true,count:bootcamps.length, data:bootcamps});
    // }catch(err){
    //     // res.status(400).json({success:false})
    //     next(err);
    // }
    // res.status(200).json({success:true, msg:"Show All Bootcamps"});
});
// @desc Get single bootcamps
// @route Get api/v1/bootcamps/:id
// @Access Public
exports.getBootcamp = asyncHandler(async(req,res,next) =>{
    // try{
        const bootcamp = await Bootcamp.findById(req.params.id);
        res.status(200).json({success:true,data:bootcamp});
    // }catch(err){
    //     // next(new errorResponse(`Bootcamp not found with id of ${req.params.id}`,404));
    //     next(err);
    //     // res.status(400).json({success:false})
    // }
    // res.status(200).json({success:true, msg:`Show Bootcamp ${req.params.id}`});
});
// @desc Create New bootcamps
// @route Post api/v1/bootcamps/:id
// @Access Private
exports.createBootcamp = asyncHandler(async (req,res,next) =>{
    // console.log(req.body);
    // res.status(200).json({success:true, msg:"Create New Bootcamp"});
    // try{
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({success:true,data:bootcamp});
    // }catch(err){
    //     // res.status(400).json({success:false})
    //     next(err);
    // }

});
// @desc Update bootcamps
// @route Put api/v1/bootcamps/:id
// @Access Private
exports.updateBootcamp = asyncHandler(async(req,res,next) =>{
    // try{
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators: true
        });
        if(!bootcamp){
            return res.status(400).json({success:false})
        }
        res.status(200).json({success:true,data:bootcamp});
    // }catch(err){
    //     // res.status(400).json({success:false})
    //     next(err);
    // }
    // res.status(200).json({success:true, msg:`Update Bootcamp ${req.params.id}`});
});
// @desc Delete bootcamps
// @route Delete api/v1/bootcamps/:id
// @Access Private
exports.deleteBootcamp = asyncHandler(async(req,res,next) =>{
    // try{
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        if(!bootcamp){
            return res.status(400).json({success:false})
        }
        res.status(200).json({success:true,data:{}});
    // }catch(err){
    //     // res.status(400).json({success:false})
    //     next(err);
    // }
    // res.status(200).json({success:true, msg:`Delete Bootcamp ${req.params.id}`});
});