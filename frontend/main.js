console.log("hello world!");

const input = document.querySelector("#message-input");
const socket = new WebSocket("ws://localhost:8080");
socket.addEventListener("message", (event) => {
  postMessage(event.data);
});
const body = document.querySelector("body");

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    let message = e.target.value;
    console.log(`You just typed\n${message}\nHow dumb!`);
    e.target.value = "";
    sendMessage(message);
  }
});

function sendMessage(message) {
  socket.send(message);
}

function postMessage(message) {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message-container");
  const paragraph = document.createElement("p");
  paragraph.classList.add("message");
  paragraph.innerText = message;
  messageContainer.appendChild(paragraph);
  body.appendChild(messageContainer);
}
