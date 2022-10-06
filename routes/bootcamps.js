const express = require('express');
const {getBootcamps,getBootcamp,updateBootcamp,deleteBootcamp,createBootcamp} =require( "../controller/bootcamps.js");
const router = express.Router();
// router.get('/' , (req,res) =>{
//     // res.send('<h1>hello from express</h1>');
//     // res.send({name: "Jason"});
//     // res.json({name: "Jason"});
//     // res.sendStatus(400);
//     res.status(200).json({success:true, msg:"Show All Bootcamps"});
// });
// router.get('/:id' , (req,res) =>{
//     res.status(200).json({success:true, msg:`ShowBootcamp ${req.params.id}`});
// });
// router.put('/' , (req,res) =>{
//     res.status(200).json({success:true, msg:`Update Bootcamp ${req.params.id}`});
// });
// router.post('/:id' , (req,res) =>{
//     res.status(200).json({success:true, msg:`Create New Bootcamp`});
// });
// router.delete('/:id' , (req,res) =>{
//     res.status(200).json({success:true, msg:`Delete Bootcamp ${req.params.id}`});
// });
router.route('/').get(getBootcamps).post(createBootcamp);
router.route('/:id').get(getBootcamp).put(updateBootcamp).delete(deleteBootcamp);
module.exports = router;