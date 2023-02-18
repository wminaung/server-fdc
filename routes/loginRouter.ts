import express from "express";
const loginRouter = express.Router();

import {
  chatkey,
  isAuthencate,
  showLoginPage,
} from "../controller/loginController";

loginRouter.get("/login", showLoginPage);

loginRouter.post("/chatkey", chatkey);

loginRouter.post("/isAuthencate", isAuthencate);

export { loginRouter };
