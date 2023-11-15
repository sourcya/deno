import { oak } from "../deps.ts";
import { echo, redisSubscriber, redisPublisher } from "./controllers.ts";
const socket = new oak.Router()
  .get("/echo", (ctx) => echo(ctx))
  .get("/redis/subscribe/:channel", (ctx) => redisSubscriber(ctx))
  .get("/redis/publish/:channel", (ctx) => redisPublisher(ctx));
export { socket };
