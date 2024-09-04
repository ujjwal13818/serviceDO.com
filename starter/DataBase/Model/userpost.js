import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId, //to be fill from frontend
      ref: "UserDb",
    },
    fullName: {
      // to be filled from frontend
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    jobLocation: {
      type: String,
      required: true,
      enum: [
        "Nalanda",
        "Patna",
        "Prayagraj",
        "Delhi",
        "Kolkata",
        "Mumbai",
        "Aurangabad",
        "Bangalore",
        "Warangal",
      ],
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "accepted", "requested", "not-active"],
      default: "active",
    },
    requestedBy: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Postdb" , postSchema)