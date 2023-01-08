import { Oak } from "../deps.ts";
import { echo, redisSub } from "./controllers.ts";
const socket = new Oak.Router();
socket.get("/echo", echo);
socket.get("/redis/sub", redisSub);
export { socket };
