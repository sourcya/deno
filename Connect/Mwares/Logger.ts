import { Oak } from "../../deps.ts";
import { log } from "../Utils/mod.ts";
export const RequestLogger: Oak.Middleware = async (ctx, next) => {
  await next();
  log.info(`${ctx.request.method} ${ctx.request.url} - ${new Date().toJSON()}`);
};
