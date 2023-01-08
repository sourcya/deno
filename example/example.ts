import { Connect } from "../deps.ts";
import { rest } from "./rest.ts";
import { socket } from "./socket.ts";
await Connect.Server({
  middlewares: [Connect.Mwares.RequestLogger],
  routers: [Connect.Routers.Rest(rest), Connect.Routers.Socket(socket)],
});
