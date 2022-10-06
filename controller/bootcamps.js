// @desc Get all bootcamps
// @route Get api/v1/bootcamps
// @Access Public

exports.getBootcamps = (req,res,next) =>{
    res.status(200).json({success:true, msg:"Show All Bootcamps", hello: req.hello});
}
// @desc Get single bootcamps
// @route Get api/v1/bootcamps/:id
// @Access Public
exports.getBootcamp = (req,res,next) =>{
    res.status(200).json({success:true, msg:`Show Bootcamp ${req.params.id}`});
}
// @desc Create New bootcamps
// @route Post api/v1/bootcamps/:id
// @Access Private
exports.createBootcamp = (req,res,next) =>{
    res.status(200).json({success:true, msg:"Create New Bootcamp"});

}
// @desc Update bootcamps
// @route Put api/v1/bootcamps/:id
// @Access Private
exports.updateBootcamp = (req,res,next) =>{
    res.status(200).json({success:true, msg:`Update Bootcamp ${req.params.id}`});
}
// @desc Delete bootcamps
// @route Delete api/v1/bootcamps/:id
// @Access Private
exports.deleteBootcamp = (req,res,next) =>{
    res.status(200).json({success:true, msg:`Delete Bootcamp ${req.params.id}`});
}