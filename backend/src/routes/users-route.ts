import express from "express";
import * as user from "../controllers/users-controller";

const router = express.Router();

router.post("/register", async (req, res) => {
  const success = await user.create(req.body);

  if (!success) {
    res.status(500).json({
      error: "Your account could not be created.",
    });

    return;
  }

  res.status(201).json({
    message: "Congratulations!\nYour account has been created",
  });
});

router.get("/login", (req, res) => {
  res.send("Login route");
});

router.get("/logout", (req, res) => {
  res.send("Logout route");
});

export default router;
