import { Oak } from "../deps.ts";
import { echo, redisSub } from "./controllers.ts";
const socket = new Oak.Router()
  .get("/echo", (ctx) => echo(ctx))
  .get("/redis/sub/:channel", (ctx) => redisSub(ctx));
export { socket };
