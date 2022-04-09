import User from "../models/user";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";

dotenv.config();
const SECRET_PASS = process.env.SECRET_PASS;

const create = async (newUser: JSON) => {
  const user = new User(newUser);

  try {
    return await user.save();
  } catch (error: any) {
    return console.log(error.message);
  }
};

const login = async (user: any) => {
  try {
    const token = jwt.sign({ _id: user._id.toString() }, SECRET_PASS as string);
    user.token = token;
    await user.save();
    return token;
  } catch (error: any) {
    return console.log(error.message);
  }
};

export { create, login };
