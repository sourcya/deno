import { oak, redis } from "../deps.ts";
export const hello = (ctx: oak.Context) => {
  ctx.response.body = {
    message: "Hello!",
  };
};

export const echo = (ctx: oak.Context) => {
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

export const redisSubscriber = async (ctx: oak.Context) => {
  if (!ctx.isUpgradable) {
    ctx.throw(501, `Not Upgradable`);
  }
  const ws = ctx.upgrade();
  const channel = ctx.params?.channel ?? "default";
  ws.onopen = () => {
    ws.send(`redis Subscriber Started to channel ${channel}`);
  };

  const redisInstance = await redis.connect({
    hostname: "127.0.0.1",
    port: 6379,
  });

  const sub = await redisInstance.subscribe(channel);

  for await (const { channel, message } of sub.receive()) {
    ws.send(`${channel} >>> ${message}`);
  }

  ws.onclose = () => console.log("Socket Client Disconnected!");
};

export const redisPublisher = async (ctx: oak.Context) => {
  if (!ctx.isUpgradable) {
    ctx.throw(501, `Not Upgradable`);
  }
  const ws = ctx.upgrade();
  const channel = ctx.params?.channel ?? "default";
  ws.onopen = () => {
    ws.send(
      `redis Publisher Started, type messages and press enter to publsih messages to ${channel} `
    );
  };

  const redisInstance = await redis.connect({
    hostname: "127.0.0.1",
    port: 6379,
  });

  //

  ws.onclose = () => console.log("Socket Client Disconnected!");
};
