import bcrypt from "bcrypt";
import User from "../models/user";

const validateCredentials = async (req: any, res: any, next: any) => {
  try {
    const { email, password: passwordEntered } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      throw new Error("No user registered with that email.");
    }

    const correctPassword = bcrypt.compareSync(passwordEntered, user.password);

    if (!correctPassword) {
      throw new Error("The password you entered is incorrect.");
    }

    req.body = user;
    return next();
  } catch (error: any) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

export default validateCredentials;
