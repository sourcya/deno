import { Connect } from "../deps.ts";
import { rest } from "./rest.ts";
import { socket } from "./socket.ts";
await Connect.Server({
  middlewares: [Connect.Mwares.RequestLogger],
  routes: [
    {
      prefix: "/rest",
      router: rest,
    },
    {
      prefix: "/socket",
      router: socket,
    },
  ],
});
