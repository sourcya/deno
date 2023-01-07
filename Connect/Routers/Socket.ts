import { Oak } from "../../deps.ts";

export const Socket = new Oak.Router().get("/socket", (ctx) => {
  ctx.response.body = {
    error: "Socket Not Implemented!",
  };
});
