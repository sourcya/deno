import { Log } from "../deps.ts";
Log.setup({
  handlers: {
    console: new Log.handlers.ConsoleHandler("DEBUG"),
  },

  loggers: {
    default: {
      level: "DEBUG",
      handlers: ["console"],
    },
  },
});
export const log = Log.getLogger();
