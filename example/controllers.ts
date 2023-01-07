import { Connect } from "../deps.ts";
export const hello = (ctx: Connect.Oak.Context) => {
  ctx.response.body = {
    message: "Hello!",
  };
};
