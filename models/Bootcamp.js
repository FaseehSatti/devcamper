const mongoose = require('mongoose');
const slugify = require('slugify');
// const geocoder = require('../utils/geocoder')
const BootcampSchema = new mongoose.Schema({
    name: {
        type : String,
        required: [true , 'please add name'],
        unique : true,
        trim: true,
        maxlength: [50 , "name cannot be more than 50 characters"]
    },
    slug : String,
    description: {
        type : String,
        required: [true , 'please add description'],
        maxlength: [500 , "Description cannot be more than 500 characters"]
    },
    website : {
        type : String,
        match : [/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        'please add a valid url with http or https']
    },
    phone : {
      type : String,
      maxlength: [20 , "Phone number cannot be more than 20 characters"]
    },
    email : {
        type : String,
        match : [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'please add a valid email']
    },
    address : {
        type :String,
        required : [true , 'please add an address']
    },
    // location : {
    //     type :{
    //         type: String,
    //         enum: ['Point'],
    //         required : true
    //     },
    //     coordinates : {
    //         type : [Number],
    //         required: true,
    //         index : '2dsphere'
    //     },
    //     formattedAddress: String,
    //     street:  String,
    //     city :   String,
    //     state :  String,
    //     zipcode: String,
    //     country: String
    // },
    careers:{
        type : [String],
        required: true,
        enum: [ 
            'Web Development',
            'Mobile Development',
            'UI/UX',
            'Data Science',
            'Business',
            'Other'
        ]
    },
    averageRating: {
        type : Number,
        min: [1,'Rating must be atleast 1'],
        max:[10, 'Rating can not be less than 10']
    },
    averageCost: Number,
    photo: {
        type: String,
        default : "no-photo.jpeg"
    },
    housing: {
        type : Boolean,
        default : false,
    },
    jobAssistance: {
        type : Boolean,
        default : false,
    },    
    jobGuarantee: {
        type : Boolean,
        default : false,
    },
    acceptGi: {
        type : Boolean,
        default : false,
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});
// create bootcamp slug from name
// BootcampSchema.pre('save', function(next){
//     // console.log("slugify ran" , this.name);
//     this.slug = slugify(this.name , {lower:true})
//     next();
// })
// BootcampSchema.pre('save',async function(next){
//     const loc = await geocoder.geocode(this.address);
//     this.location = {
//         type : 'Point',
//         coordinates: [loc[0].longitude,loc[0].latitude],
//         formattedAddress: loc[0],streetName,
//         formattedAddress: loc[0],city,
//         formattedAddress: loc[0],stateCode,
//         formattedAddress: loc[0],zipCode,
//         formattedAddress: loc[0],country,
//     }
//     //donot save address
//     this.address = undefined
//     next();
// })
module.exports = mongoose.model('Bootcamp',BootcampSchema);