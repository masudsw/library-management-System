// src/welcome/welcome.route.ts
import { Router } from "express";
import { message } from "./message";


const welcomeRouter = Router();

welcomeRouter.get("/", (req, res) => {
  res.send(message);
});

export default welcomeRouter;