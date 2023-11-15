//load local envs
//
import "https://deno.land/std@0.206.0/dotenv/load.ts";

//dependencies
export * as redis from "https://deno.land/x/redis@v0.32.0/mod.ts";
export * as oak from "https://deno.land/x/oak@v12.6.1/mod.ts";
export * as log from "https://deno.land/std@0.206.0/log/mod.ts";
export * as nats from "https://deno.land/x/nats@v1.18.0/src/mod.ts";

export * from "./mod.ts";
