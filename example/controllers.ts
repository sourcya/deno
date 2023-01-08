import { Oak, Redis } from "../deps.ts";

// /hello handler
export const hello: Oak.Middleware = (ctx) => {
  ctx.response.body = {
    message: "Hello!",
  };
};

export const echo: Oak.Middleware = (ctx) => {
  if (!ctx.isUpgradable) {
    ctx.throw(501, `Not Upgradable`);
  }
  const ws = ctx.upgrade();

  ws.onopen = () => {
    ws.send("Welcome!");
  };
  ws.onmessage = (message) => {
    ws.send(`${message.data}`);
  };
  ws.onclose = () => console.log("Socket Client Disconnected!");
};

export const redisSub: Oak.Middleware = async (ctx) => {
  if (!ctx.isUpgradable) {
    ctx.throw(501, `Not Upgradable`);
  }
  const ws = ctx.upgrade();

  ws.onopen = () => {
    ws.send("Redis Subscriber Started!");
  };
  const redis = await Redis.connect({ hostname: "127.0.0.1", port: 6379 });
  const sub = await redis.subscribe("test");
  for await (const { channel, message } of sub.receive()) {
    ws.send(`${channel} >>> ${message}`);
  }
  ws.onclose = () => console.log("Socket Client Disconnected!");
};
