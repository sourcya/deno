import { Oak, Connect } from "../../deps.ts";
const port = !Number.isNaN(Number(Deno.env.get("PORT")))
  ? Number(Deno.env.get("PORT"))
  : 3000;

export async function Server({
  middlewares,
}: {
  middlewares: Array<Oak.Middleware>;
}): Promise<void> {
  const OakServer = new Oak.Application();
  middlewares.forEach((middleware) => {
    OakServer.use(middleware);
  });
  Connect.Utils.log.warning(`Listening on ${port}`);
  try {
    await OakServer.listen({ port });
  } catch (e) {
    Connect.Utils.log.error(`${e}`);
    Connect.Utils.log.critical(`Server is aborting!`);
  }
}
