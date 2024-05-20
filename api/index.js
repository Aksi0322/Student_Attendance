import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.routes.js";

mongoose.connect(
  "mongodb+srv://Akshay:Akshay@studentattendance.ygl6ygz.mongodb.net/?retryWrites=true&w=majority&appName=StudentAttendance"
).then;
console.log("Connected to MongoDB");

const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000!");
});

app.use("/app/user",userRouter)
