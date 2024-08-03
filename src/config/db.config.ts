import mongoose from "mongoose";

// MONGODB URI
const uri = process.env.MONGODB_URI as string;

export const connectDb = () => {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("Db connected!☠️");
    })
    .catch((err) => {
      console.log(err);
    });
};
