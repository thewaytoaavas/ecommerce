import mongoose from "mongoose";

export const mongoConnect = () => {
  try {
    const conStr = process.env.MONGO_URL;
    const con = mongoose.connect(conStr);
    con && console.log("Mongo connected");
  } catch (error) {
    console.log(error);
  }
};
