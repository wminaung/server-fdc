import express from "express";
import aws from "aws-sdk";
import formidable from "formidable";
import dotenv from "dotenv";
import { v4 as uuid } from "uuid";
import { imageUploadRouter } from "./routes/imageUploadRouter";
import { Server } from "socket.io";
import { loginRouter } from "./routes/loginRouter";
dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.use(express.static("public"));

app.use(loginRouter);

app.use(imageUploadRouter);

const server = app.listen(PORT, () => {
  console.log("Server is running on PORT ", PORT, "http://localhost:" + PORT);
});

/// Socket thing

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("connection is success");
  // send a message to the client
  socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

  // receive a message from the client
  socket.on("hello from client", (data) => {
    // ...
    console.log(data);
  });
});
