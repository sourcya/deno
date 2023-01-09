const ws = new WebSocket("ws://localhost:3000/socket/redis/sub/def");
ws.onopen = () => console.log("Connected to server");
ws.onmessage = (m) => {
  console.log(m.data);
};
ws.onclose = () => console.log("Disconnected from server");
