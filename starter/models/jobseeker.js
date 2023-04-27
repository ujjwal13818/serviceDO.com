const mongoose = require("mongoose");

const seekerschema = new mongoose.Schema({
  id:{
    type : Number,
    trim : true,
},
    fname: {
        type: String,
        required: [true , "must provide full name"],
        trim : true,
    },
    // lname: {
    //     type: String,
    //     required: [true , "must provide last name"],
    //     trim : true,
    // },
    password: {
      type: String,
      required: [true , "must provide password"],
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
   skills: {
    type: String,
    required: true,
    trim: true,
   },
  resume: {
    type: String,
    required: true,
    trim: true,
  },
  radio:{
    type: String,
    possibleValues: ['Yes' , 'No'], 
  },
  permission: {
    type: String,
    required: true,
  }
});
module.exports = mongoose.model("seekerData" , seekerschema);