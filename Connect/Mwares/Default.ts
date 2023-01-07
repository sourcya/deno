import * as middlewares from "./mod.ts";
export function Default() {
  return [
    middlewares.RequestLogger
  ];
}