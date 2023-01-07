import { Connect } from "../deps.ts";

async function example(): Promise<void> {
  await Connect.Server({
    middlewares: [Connect.Mwares.RequestLogger],
  });
}
example()