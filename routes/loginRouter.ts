import express, { Request, Response } from "express";
const loginRouter = express.Router();
import { v4 } from "uuid";
import {
  chatkey,
  isAuthencate,
  showLoginPage,
} from "../controller/loginController";

interface Key {
  id: number;
  user_id: number;
  key: string;
}

export const keys: Key[] = [] as Key[];

interface UserInfo {
  id: number;
  name: string;
  email: string;
}

export const users: UserInfo[] = [
  {
    id: 1,
    name: "admin",
    email: "admin@gmail.com",
  },
  {
    id: 2,
    name: "win",
    email: "win@win",
  },
];

loginRouter.get("/login", showLoginPage);

loginRouter.post("/chatkey", chatkey);

loginRouter.post("/isAuthencate", isAuthencate);

export { loginRouter };
