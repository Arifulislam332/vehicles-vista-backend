import cors from "cors";
import "dotenv/config";
import express, { Application, Request, Response } from "express";
import { connectDb } from "./config/db.config";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome!🫡" });
});

connectDb();

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is runing on port: ${port}`);
});
