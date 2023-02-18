import { io } from "https://cdn.socket.io/4.3.2/socket.io.esm.min.js";

const { userName, userId } = JSON.parse(localStorage.getItem("auth"));

const usernameTag = document.getElementById("username");
const mainTag = document.getElementById("main");
const inputTag = document.getElementById("input");

usernameTag.textContent = userName;

const socket = io("/");

inputTag.addEventListener("change", (e) => {
  const inputMessage = e.target.value;
  socket.emit("sendMessage", { userId, inputMessage });
});

socket.on("sendMessage", ({ inputMessage, name, src }) => {
  console.log("msg:", inputMessage, "  name:", name, "  src:", src);
  ///
});
