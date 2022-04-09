import express from "express";
import { addUser } from "../controllers/users-controller";

const router = express.Router();

router.post("/register", async (req, res) => {
  const success = await addUser(req.body);

  if (success) {
    res.status(201).json({
      message:
        "Congratulations!\nYour account has been successfully" + " created.",
    });
  } else {
    res.status(500).json({
      error: "Your account could not be created.",
    });
  }
});

router.get("/login", (req, res) => {
  res.send("Login route");
});

router.get("/logout", (req, res) => {
  res.send("Logout route");
});

export default router;
