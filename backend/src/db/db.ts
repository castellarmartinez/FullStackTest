import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

let MONGODB_HOST = process.env.MONGODB_HOST;
let MONGODB_PORT = process.env.MONGODB_PORT;
let DB_NAME = process.env.DB_NAME;

(async () => {
  try {
    await mongoose.connect(
      `mongodb://${MONGODB_HOST}:${MONGODB_PORT}/${DB_NAME}`
    );

    console.log("Connected to the database:", DB_NAME);

  } catch (error) {
    console.log(error);
  }
})();