import { oak } from "../../deps.ts";
import { Utils } from "../mod.ts";

const port = !Number.isNaN(Number(Deno.env.get("PORT")))
  ? Number(Deno.env.get("PORT"))
  : 3000;

export interface ConnectServerOptions {
  middlewares: oak.Middleware[];
  routes: {
    prefix: string;
    router: oak.Router;
  }[];
}
export async function serve(ConnectServerOptions: ConnectServerOptions) {
  try {
    const oakServer = new oak.Application();
    ConnectServerOptions.middlewares.forEach((middleware) => {
      oakServer.use(middleware);
    });
    const router = new oak.Router();
    ConnectServerOptions.routes.forEach((route) => {
      router.use(
        route.prefix,
        route.router.routes(),
        route.router.allowedMethods()
      );
    });
    oakServer.use(router.routes());
    Utils.logger.warning(`Listening on ${port}`);
    return await oakServer.listen({ port });
  } catch (e) {
    Utils.logger.error(`${e}`);
    Utils.logger.critical(`Server is aborting!`);
  }
}
