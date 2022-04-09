import express from "express";
import * as dotenv from "dotenv";

dotenv.config();
const PORT: number = Number(process.env.PORT);
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
   res.send('Starting server');
});

app.listen(PORT, () => {
   console.log(`Server is up on port ${PORT}`);
});