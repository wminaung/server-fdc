import express from "express";
import aws from "aws-sdk";
import formidable from "formidable";
import dotenv from "dotenv";
import { v4 as uuid } from "uuid";
import { imageUploadRouter } from "./routes/imageUploadRouter";

import { loginRouter } from "./routes/loginRouter";
dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.use(express.static("public"));

app.use(loginRouter);

app.use(imageUploadRouter);

app.listen(PORT, () => {
  console.log("Server is running on PORT ", PORT, "http://localhost:" + PORT);
});
