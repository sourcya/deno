const ws = new WebSocket("ws://localhost:3000/socket/echo");
ws.onopen = () => console.log("Connected to server");
ws.onmessage = (m) => {
  console.log("Got message from server: ", m.data);
  setInterval(() => {
    ws.send(`${crypto.randomUUID()}`);
  }, 5000);
};
ws.onclose = () => console.log("Disconnected from server");
