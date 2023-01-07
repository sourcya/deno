import { Oak } from "../../deps.ts";

export const Swagger = new Oak.Router().get("/swagger", (ctx) => {
  ctx.response.body = {
    error: "Swagger Not Implemented!",
  };
});
