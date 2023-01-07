## Sourcya Deno SDK
> Deno Module wraps Oak http server, contains helpers to develop web apps using deno

### Using
Server bootstrap file
```
// main.ts
import { Connect } from "https://deno.land/x/sourcya/mod.ts";

// run the server with default options
await Connect.Server();
```
Run using Deno
```
$ PORT=5000 deno run --allow-net --allow-env main.ts
```