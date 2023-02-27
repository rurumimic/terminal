let socket = new WebSocket("ws://localhost:3030/echo");

socket.onopen = function (e) {
  console.log("[Open]");
  socket.send("I am Client");
};

socket.onmessage = function (event) {
  console.log(`[Message] ${event.data}`);
  socket.close(1000, "[Close]");
};

socket.onclose = function (event) {
  if (event.wasClean) {
    console.log(`[Closed] code=${event.code} reason=${event.reason}`);
  } else {
    console.log(`[Dead] code=${event.code} reason=${event.reason}`);
  }
};

socket.onerror = function (error) {
  console.log(`[Error]`);
};
