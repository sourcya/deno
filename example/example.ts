import { Connect } from "../deps.ts";
import { rest } from "./rest.ts";
import { socket } from "./socket.ts";
await Connect.serve({
  middlewares: [Connect.Mwares.requestLogger],
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
