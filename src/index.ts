import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app: Application = express();

const port: String | Number = process.env.PORT || 5000;

// middleware
app.use(express.json());
app.use(cors());

const runningServer = (): void => {
  try {
    app.listen(port, () => console.log("Server is running well"));
  } catch (error) {
    console.log("error: ", error);
  }
};
runningServer();
