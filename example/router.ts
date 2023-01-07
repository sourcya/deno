import { Oak } from "../deps.ts";
import { hello } from "./controllers.ts";
const router = new Oak.Router();

router.get("/hello", hello);

export { router };
