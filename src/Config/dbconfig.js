import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export async function connectDB() {
    console.log(DB_URL);
    try {
        await mongoose.connect(DB_URL);
        console.log("connect success");
    } catch (error) {
        console.log("Error in db connection", error);
    }
}