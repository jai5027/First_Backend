import mongoose from "mongoose";

async function connectDB(){
    await mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.7.0')
   
    console.log("connect to DB");
    
}
export default connectDB