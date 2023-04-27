const mongoose = require("mongoose");
const employerschema = new mongoose.Schema({
    id:{
        type : Number,
        trim : true,
    },
    name: {
        type: String,
        required: [true , "must provide name"],
        trim : true,
    },
    email: {
        type: String,
        required:[true , "must provide valid email"],
        trim : true,
    },
    address : {
        type: String,
        required:[true , "must provide your address"],
        trim : true,
    },
    phone:{
        type: Number,
        required:[true , "provide your phone number"],
        trim:true,
    },
    quantity:{
        type: Number,
        required: true,
        trim:true,
    },
   password:{
    type: String,
    required : true,
   },
   cpassword:{
    type: String,
    required : true,
   },
   skills: {
    type: String,
    required: true,
    trim: true,
   },
   salary: {
    type: Number,
    required: false,
   },
   gender: {
    type: String,
    possibleValues: ['Male' , 'Female' , 'Other'],
   }
});
module.exports = mongoose.model("employerData" , employerschema);