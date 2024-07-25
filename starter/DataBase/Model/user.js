import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  dob: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        return new Date() > value;
      },
    },
  },
  address: {
    type: String,
    required: true,
  },
});

export default mongoose.model("UserDb", userSchema);