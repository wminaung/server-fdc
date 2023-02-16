import express, { Request, Response } from "express";
const imageUploadRouter = express.Router();
import { imageController } from "../controller/imageController";

imageUploadRouter.post("imageUpload", imageController);

export { imageUploadRouter };
