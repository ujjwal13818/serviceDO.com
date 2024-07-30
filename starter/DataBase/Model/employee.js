import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
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
    address: {
      type: String,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
      unique: true,
      minlength: 10,
      maxlength: 10,
    },
    skill: {
      type: String,
      required: true,
      enum: [
        "Carpentary",
        "Private teacher",
        "Mason",
        "Plumber",
        "Labourer",
        "Car driver",
        "Painter",
        "Electrician",
        "Others",
      ],
    },
    experience: {
      type: Number,
      min: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("EmployeeDb", employeeSchema);
