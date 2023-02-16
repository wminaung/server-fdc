import { Request, Response } from "express";

const imageController = (req: Request, res: Response) => {
  res.json({ name: "Win Min Aung " });
};

export { imageController };
