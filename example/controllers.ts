import { Connect } from "../deps.ts";
export const hello = (ctx: Connect.Oak.Context) => {
  ctx.response.body = {
    message: "Hello!",
  };
};
export const echo = (ctx: Connect.Oak.Context) => {
  if (!ctx.isUpgradable) {
    ctx.throw(501, `Not Upgradable`);
  }
  const ws = ctx.upgrade();

  ws.onopen = () => {
    ws.send("Welcome!");
  };
  ws.onmessage = (m) => {
    ws.send(`${m.data}`);
  };
  ws.onclose = () => console.log("Socket Client Disconnected!");
};
