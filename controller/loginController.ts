import { Request, Response } from "express";
import path from "path";

const showLoginPage = (req: Request, res: Response) => {
  const url = path.join(__dirname, "..", "public", "login.html");

  res.sendFile(url);
};

export { showLoginPage };
