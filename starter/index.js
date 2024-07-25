import express from "express";
import { connectDb } from "./DataBase/ConnectDb.js";
import registerRoutes from "./Routes/Register.js";

const app = express();

app.use(express.json()); // converts requested data from json to javascript object;

//routes
app.use("/auth", registerRoutes);


const PORT = process.env.PORT || 7777;
const start = async () => {
  try {
    await connectDb();
    app.listen(PORT , () => {
      console.log(
        `Database is connected successfully and server is running at port: ${process.env.PORT}`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

start();
