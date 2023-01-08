import { Oak } from "../../deps.ts";
export const Socket = (Router: Oak.Router) => {
  return new Oak.Router().use(
    "/socket",
    Router.routes(),
    Router.allowedMethods()
  );
};
