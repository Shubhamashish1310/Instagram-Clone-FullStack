import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";

export async function connectDB() {
    console.log(DB_URL);
    try {
        console.log(DB_URL);
        await mongoose.connect(DB_URL);
        console.log("connect success");
    } catch (error) {
        console.log(error);
    }
}