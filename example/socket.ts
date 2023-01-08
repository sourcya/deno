import { Connect } from "../deps.ts";
import { echo } from "./controllers.ts";
const socket = new Connect.Oak.Router();

socket.get("/echo", echo);

export { socket };
