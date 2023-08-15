const mongoose = require("mongoose");
const employerschema = new mongoose.Schema({
    id:{
        type : String,
        trim : true,
    },
    name : {
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
    phone : {
        type: Number,
        required:false,
        trim:true,
    },
   description : {
    type: String,
    required: true,
    trim: true,
   },
});
module.exports = mongoose.model("employerData" , employerschema);