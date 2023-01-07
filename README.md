### Sourcya Deno SDK
> Deno Module wraps Oak http server, contains helpers to develop web apps using deno

```
import { Connect } from "https://deno.land/x/sourcya/mod.ts";

// bootstrap an Oak Application Server from Connect.Server()
async function server() {
  await Connect.Server({
    middlewares: [Connect.Mwares.RequestLogger],
  });
}

// run the server
server()
```
