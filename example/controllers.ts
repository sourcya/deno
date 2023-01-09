import { Oak, Redis } from "../deps.ts";
export const hello = (
  ctx: Oak.RouterContext<
    "/hello",
    Record<string | number, string | undefined>,
    Record<string, any>
  >
) => {
  ctx.response.body = {
    message: "Hello!",
  };
};

export const echo = (
  ctx: Oak.RouterContext<
    "/echo",
    Record<string | number, string | undefined>,
    Record<string, any>
  >
) => {
  if (!ctx.isUpgradable) {
    ctx.throw(501, `Not Upgradable`);
  }
  const ws = ctx.upgrade();

  ws.onopen = () => {
    ws.send("Welcome!");
  };
  ws.onmessage = (message: { data: any }) => {
    ws.send(`${message.data}`);
  };
  ws.onclose = () => console.log("Socket Client Disconnected!");
};

export const redisSub = async (
  ctx: Oak.RouterContext<
    "/redis/sub/:channel",
    { channel: string } & Record<string | number, string | undefined>,
    Record<string, any>
  >
) => {
  if (!ctx.isUpgradable) {
    ctx.throw(501, `Not Upgradable`);
  }
  const ws = ctx.upgrade();

  ws.onopen = () => {
    ws.send("Redis Subscriber Started!");
  };

  const channel = ctx.params?.channel ?? "default";
  const redis = await Redis.connect({ hostname: "127.0.0.1", port: 6379 });
  const sub = await redis.subscribe(channel);
  for await (const { channel, message } of sub.receive()) {
    ws.send(`${channel} >>> ${message}`);
  }
  ws.onclose = () => console.log("Socket Client Disconnected!");
};
