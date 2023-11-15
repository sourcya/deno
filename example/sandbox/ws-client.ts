import { Utils } from "../../Connect/mod.ts";
try {
  if (
    !(
      Array.isArray(Deno.args) &&
      Deno.args.length > 0 &&
      typeof Deno.args[0] === "string"
    )
  ) {
    throw new Error("Missing WebSocket URI!");
  }
  const URI = String(Deno.args[0]);
  if (!URI.startsWith("ws://")) {
    throw new Error("URI must start with ws:// ");
  }

  const ws = new WebSocket(URI);

  ws.onopen = () => console.log("Connected to server");
  ws.onmessage = (m) => {
    Utils.logger.info(m.data);
  };
  ws.onclose = () => {
    Utils.logger.warning("Socket Closed!");
  };
} catch (error) {
  Utils.logger.error(error);
}
