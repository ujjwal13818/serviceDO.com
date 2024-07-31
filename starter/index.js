import express from "express";
import { connectDb } from "./DataBase/ConnectDb.js";
import registerRoutes from "./Routes/Register.js";
import premiumRoutes from "./Routes/Premium.js"
import postRoutes from "./Routes/post.js"
import cors from "cors"
import colors from 'colors';

const app = express();

app.use(express.json()); // converts requested data from json to javascript object;
app.use(cors());

//routes
app.use("/auth", registerRoutes);
app.use("/premium", premiumRoutes);
app.use("/post", postRoutes);


const PORT = process.env.PORT || 7777;
const start = async () => {
  try {
    await connectDb();
    app.listen(PORT , () => {
      console.log(
        `Database Connected successfully. Server running on ${process.env.MODE} mode, port no ${process.env.PORT}`.bgCyan.white
      );
      
    });
  } catch (error) {
    console.log(error.bgRed);
  }
};

start();
