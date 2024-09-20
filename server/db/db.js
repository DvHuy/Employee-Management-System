import mongoose from "mongoose";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB database connected");
    
  } catch (err) {
    console.log(err);
  }
};

export default connectToDatabase;
