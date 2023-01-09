import { Oak, Connect } from "../../deps.ts";

const port = !Number.isNaN(Number(Deno.env.get("PORT")))
  ? Number(Deno.env.get("PORT"))
  : 3000;
export interface ConnectServerOptions {
  middlewares: Oak.Middleware[];
  routes: {
    prefix: string;
    router: Oak.Router;
  }[];
}
export async function Server(ConnectServerOptions: ConnectServerOptions) {
  try {
    const OakServer = new Oak.Application();
    ConnectServerOptions.middlewares.forEach((middleware) => {
      OakServer.use(middleware);
    });
    const router = new Oak.Router();
    ConnectServerOptions.routes.forEach((route) => {
      router.use(
        route.prefix,
        route.router.routes(),
        route.router.allowedMethods()
      );
    });
    OakServer.use(router.routes());
    Connect.Utils.log.warning(`Listening on ${port}`);
    return await OakServer.listen({ port });
  } catch (e) {
    Connect.Utils.log.error(`${e}`);
    Connect.Utils.log.critical(`Server is aborting!`);
  }
}
