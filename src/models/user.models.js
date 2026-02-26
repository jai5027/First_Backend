import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: Number,
    name: String
})

const userModel = mongoose.model("users", userSchema)

export default userModel