import { Oak, Connect } from "../../deps.ts";
const port = !Number.isNaN(Number(Deno.env.get("PORT")))
  ? Number(Deno.env.get("PORT"))
  : 3000;
export interface ConnectServerOptions {
  middlewares: Oak.Middleware[];
  routers: Oak.Router[];
}
const middlewares = Connect.Mwares.Default();
const routers = Connect.Routers.Default();
const defaultServerOptions = {
  middlewares,
  routers,
};
export async function Server(
  ConnectServerOptions: ConnectServerOptions = defaultServerOptions
): Promise<void> {
  const OakServer = new Oak.Application();
  ConnectServerOptions.middlewares.forEach((middleware) => {
    OakServer.use(middleware);
  });
  ConnectServerOptions.routers.forEach((router) => {
    OakServer.use(router.routes());
  });
  Connect.Utils.log.warning(`Listening on ${port}`);
  try {
    await OakServer.listen({ port });
  } catch (e) {
    Connect.Utils.log.error(`${e}`);
    Connect.Utils.log.critical(`Server is aborting!`);
  }
}
