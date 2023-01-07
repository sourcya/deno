import { Oak } from "../deps.ts";
export const hello = (ctx: Oak.Context) => {
  ctx.response.body = {
    message: "Hello!",
  };
};
