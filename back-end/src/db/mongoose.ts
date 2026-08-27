import mongoose from "mongoose";
import { env } from "../config/env.js";

export async function connectDatabase(): Promise<void> {
  try {
    await mongoose.connect(env.MONGODB_URI);

    console.log("MongoDB Connected.");
  } catch (error) {
    console.error("MongoDB Connection Faild: ", error);

    process.exit(1);
  }
}
