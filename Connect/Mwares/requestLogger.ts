import { oak } from "../../deps.ts";
import { logger } from "../Utils/mod.ts";
export async function requestLogger(
  ctx: oak.Context,
  next: () => Promise<void>
): oak.Middleware {
  await next();
  logger.info(
    `${ctx.request.method} ${ctx.request.url} - ${new Date().toJSON()}`
  );
}
