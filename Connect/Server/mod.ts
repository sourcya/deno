import { Oak, Connect } from "../../deps.ts";

const port = !Number.isNaN(Number(Deno.env.get("PORT")))
  ? Number(Deno.env.get("PORT"))
  : 3000;
export interface ConnectServerOptions {
  middlewares: Oak.Middleware[];
  routers: Oak.Router[];
}
export async function Server(
  ConnectServerOptions: ConnectServerOptions
): Promise<void> {
  try {
    const OakServer = new Oak.Application();
    ConnectServerOptions.middlewares.forEach((middleware) => {
      OakServer.use(middleware);
    });
    ConnectServerOptions.routers.forEach((router) => {
      OakServer.use(router.routes());
      OakServer.use(router.allowedMethods());
    });

    Connect.Utils.log.warning(`Listening on ${port}`);
    return await OakServer.listen({ port });
  } catch (e) {
    Connect.Utils.log.error(`${e}`);
    Connect.Utils.log.critical(`Server is aborting!`);
  }
}
