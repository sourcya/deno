import { Connect } from "../deps.ts";
import { hello } from "./controllers.ts";
const rest = new Connect.Oak.Router();

rest.get("/hello", hello);

export { rest };
