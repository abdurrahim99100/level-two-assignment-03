import express, { Application } from "express";
import cors from 'cors';
const app: Application = express();

// middle were 
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
