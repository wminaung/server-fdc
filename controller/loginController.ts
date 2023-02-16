import { Request, Response } from "express";
import path from "path";
import { v4 } from "uuid";
import { keys, users } from "../routes/loginRouter";

const showLoginPage = (req: Request, res: Response) => {
  const url = path.join(__dirname, "..", "public", "login.html");

  res.sendFile(url);
};

const chatkey = (req: Request, res: Response) => {
  const hasKey = keys.some((key) => {
    return key.key === req.body.key;
  });
  if (hasKey) {
    res.end();
  } else {
    res.redirect("/login");
  }
};

const isAuthencate = (req: Request, res: Response) => {
  const key = v4();

  const { name, email } = req.body;

  const foundUser = users.find(
    (user) => user.name === name && user.email === email
  );
  const existUser = { ...foundUser };

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

  res.status(200).json({ status: "success", key: key, message: "authencated" });
};

export { showLoginPage, chatkey, isAuthencate };
