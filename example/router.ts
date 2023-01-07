import { Connect } from "../deps.ts";
import { hello } from "./controllers.ts";
const router = new Connect.Routers.Router();

router.get("/hello", hello);

export { router };
