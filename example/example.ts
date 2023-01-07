import { Connect } from "../deps.ts";
import { router } from "./router.ts";
await Connect.Server({
  middlewares: Connect.Mwares.Default(),
  routers: [...Connect.Routers.Default(), Connect.Routers.Rest(router)],
});
