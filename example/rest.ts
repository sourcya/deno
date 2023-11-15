import { oak } from "../deps.ts";
import { hello } from "./controllers.ts";
const rest = new oak.Router().get("/hello", (ctx) => hello(ctx));
//.post("/telamatics/:topic", (ctx) => telematics(ctx));
export { rest };
