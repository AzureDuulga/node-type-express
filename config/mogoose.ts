import mongoose from "mongoose";

const connectDB = async (dburl: string) => {
  try {
    await mongoose.connect(dburl);
    console.log("MONGODB-тэй холбогдлоо.");
  } catch (err) {
    console.log("MONGODB-тэй холбогдлох үед алдаа гарлаа: ", err);
  }
};

export default connectDB;
