import express from "express";
import * as user from "../controllers/users-controller";
import validateCredentials from "../middlewares/validate-login";

const router = express.Router();

router.post("/register", async (req: any, res: any) => {
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

router.post("/login", validateCredentials, async (req: any, res: any) => {
   const token = await user.login(req.body)

   res.status(200).json({
       message: 'You are now logged in. Your token for this session:',
       token: token
   })
});

router.get("/logout", (req, res) => {
  res.send("Logout route");
});

export default router;
