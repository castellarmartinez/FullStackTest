import mongoose from "mongoose";
import bcrypt from "bcrypt";

interface userInterface {
  name: string;
  email: string;
  password: string;
  phone: number;
  isAdmin: boolean;
  token: string;
}

const userSchema = new mongoose.Schema<userInterface>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
    default: "",
  },
});

userSchema.pre("save", function (next) {
  const user = this;

  if (user.isModified("name")) { // Does this only when the users is created
   user.password = bcrypt.hashSync(user.password, 8);
   user.name = user.name.toLowerCase();
   user.name = user.name.replace(/\b\w/g, (c) => c.toUpperCase()); //Capitalize initial letters
  }

  next();
});

const User = mongoose.model("User", userSchema);

export default User;
