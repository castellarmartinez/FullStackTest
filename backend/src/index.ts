import express from "express";
import * as dotenv from "dotenv";
import "./db/db";

import user_route from "./routes/users-route";

dotenv.config();
const PORT: number = Number(process.env.PORT);
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Starting server");
});

app.use("/users", user_route);
// app.use('/products', );

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
