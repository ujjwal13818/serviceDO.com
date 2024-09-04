import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

//named
export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};



//default -> import ghrhger form '.file';
//named -> import {connectDb} from '';