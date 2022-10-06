const Bootcamp =require ("../models/Bootcamp");

// @desc Get all bootcamps
// @route Get api/v1/bootcamps
// @Access Public

exports.getBootcamps = async(req,res,next) =>{
    try{
        const bootcamps = await Bootcamp.find();
        res.status(200).json({success:true,count:bootcamps.length, data:bootcamps});
    }catch(err){
        res.status(400).json({success:false})
    }
    // res.status(200).json({success:true, msg:"Show All Bootcamps"});
}
// @desc Get single bootcamps
// @route Get api/v1/bootcamps/:id
// @Access Public
exports.getBootcamp = async(req,res,next) =>{
    try{
        const bootcamp = await Bootcamp.findById(req.params.id);
        res.status(200).json({success:true,data:bootcamp});
    }catch(err){
        res.status(400).json({success:false})
    }
    // res.status(200).json({success:true, msg:`Show Bootcamp ${req.params.id}`});
}
// @desc Create New bootcamps
// @route Post api/v1/bootcamps/:id
// @Access Private
exports.createBootcamp = async (req,res,next) =>{
    // console.log(req.body);
    // res.status(200).json({success:true, msg:"Create New Bootcamp"});
    try{
        const bootcamp = await Bootcamp.create(req.body);
        res.status(201).json({success:true,data:bootcamp});
    }catch(err){
        res.status(400).json({success:false})
    }

}
// @desc Update bootcamps
// @route Put api/v1/bootcamps/:id
// @Access Private
exports.updateBootcamp = async(req,res,next) =>{
    try{
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id,req.body,{
            new: true,
            runValidators: true
        });
        if(!bootcamp){
            return res.status(400).json({success:false})
        }
        res.status(200).json({success:true,data:bootcamp});
    }catch(err){
        res.status(400).json({success:false})
    }
    // res.status(200).json({success:true, msg:`Update Bootcamp ${req.params.id}`});
};
// @desc Delete bootcamps
// @route Delete api/v1/bootcamps/:id
// @Access Private
exports.deleteBootcamp = async(req,res,next) =>{
    try{
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
        if(!bootcamp){
            return res.status(400).json({success:false})
        }
        res.status(200).json({success:true,data:{}});
    }catch(err){
        res.status(400).json({success:false})
    }
    // res.status(200).json({success:true, msg:`Delete Bootcamp ${req.params.id}`});
}