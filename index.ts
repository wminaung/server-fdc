import express from "express";
import dotenv from "dotenv";
import { v4 as uuid } from "uuid";
import { Server } from "socket.io";
import { loginRouter } from "./routes/loginRouter";
import { users } from "./model/usersModel";
import { chatHistory } from "./model/historyModel";

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

app.use(express.static("public"));

app.use(loginRouter);

const server = app.listen(PORT, () => {
  console.log("Server is running on PORT ", PORT, "http://localhost:" + PORT);
});

/////////// SOCKECT THINGS /////////////////
const io = new Server(server);

io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected`);

  socket.on("sendMessage", ({ userId, inputMessage }) => {
    const id = chatHistory.length + 1;
    const createdAt = new Date().toISOString();

    chatHistory.push({ id, userId, inputMessage, createdAt });

    const { name } = { ...users.find((user) => user.id === userId) };
    io.sockets.emit("sendMessage", { inputMessage, name: name, src: "" });
  });

  // upon disconnection
  // socket.on("disconnect", (reason) => {
  //   console.log(`socket ${socket.id} disconnected due to ${reason}`);
  // });
});
