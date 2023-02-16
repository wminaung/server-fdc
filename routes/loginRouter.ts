import express, { Request, Response } from "express";
const loginRouter = express.Router();
import { v4 } from "uuid";
import { showLoginPage } from "../controller/loginController";

interface Key {
  id: number;
  user_id: number;
  key: string;
}

const keys: Key[] = [] as Key[];

interface UserInfo {
  id: number;
  name: string;
  email: string;
}

const users: UserInfo[] = [
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

loginRouter.post("/getkey", (req: Request, res: Response) => {
  const hasKey = keys.some((key) => {
    return key.key === req.body.key;
  });
  if (hasKey) {
    res.end();
  } else {
    res.redirect("/login");
  }
});

loginRouter.post("/isAuthencate", (req: Request, res: Response) => {
  const key = v4();

  const { name, email } = req.body;

  const foundUser = users.find(
    (user) => user.name === name && user.email === email
  );
  const existUser = { ...foundUser };
  console.log(existUser, "exitUser");

  if (Object.keys(existUser).length < 1) {
    return res
      .status(404)
      .json({ status: "fail", message: "user & email are not exits" });
  }
  if (!existUser.id) {
    return res
      .status(404)
      .json({ status: "fail", message: "user id doesn't exits" });
  }
  keys.push({ id: keys.length + 1, key: key, user_id: existUser.id });
  console.log(keys);

  res.status(200).json({ status: "success", key: key, message: "authencated" });
});

export { loginRouter };
