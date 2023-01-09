import { Oak } from "../deps.ts";
import { hello } from "./controllers.ts";
const rest = new Oak.Router().get("/hello", (ctx) => hello(ctx));
//.post("/telamatics/:topic", (ctx) => telematics(ctx));
export { rest };
