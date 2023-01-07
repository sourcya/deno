import { Oak } from "../../deps.ts";

export const Rest = (Router: Oak.Router) => {
  return new Oak.Router().use(
    "/rest",
    Router.routes(),
    Router.allowedMethods()
  );
};
