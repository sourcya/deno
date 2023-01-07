import { Oak } from "../../deps.ts";

export const Root = new Oak.Router().get("/", (ctx) => {
  ctx.response.body = {
    name: "Deno App",
    version: "1.0",
  };
});
