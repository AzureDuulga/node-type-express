import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express, { Request, Response } from "express";
import userRouter from "./Routes/userRouter";
import moviesRouter from "./Routes/moviesRouter";
import connectDB from "./config/mogoose";
const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(cors());
const dburl: string = process.env.DATABASE_URI || "";

app.get("/", (req: Request, res: Response) => {
  res.send("hello TS express");
});

app.use("/users", userRouter);
app.use("/movies", moviesRouter);

connectDB(dburl);

app.listen(port, () => {
  console.log(`${port} дээр сервер аслаа.`);
});
