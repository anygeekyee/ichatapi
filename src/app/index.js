import Koa from "koa";
import allRouters from "#router/index.js";
import { WechatyBuilder } from "wechaty";
import qrcodeTerminal from "qrcode-terminal";

const app = new Koa();

// 创建一个微信机器人实例
const bot = WechatyBuilder.build({
  name: "ichatapi",
  puppet: "wechaty-puppet-wechat",
});

async function onScan(qrcode, status) {
  qrcodeTerminal.generate(qrcode);
  const qrImgUrl = [
    "https://api.qrserver.com/v1/create-qr-code/?data=",
    encodeURIComponent(qrcode),
  ].join("");
  console.log(qrImgUrl);
}

async function onLogin(user) {
  console.log(`贴心助理${user}登录了`);
}

async function onMessage(msg) {
  console.log(msg);
}

// 设置 Wechaty 事件监听器
bot.on("scan", onScan);
bot.on("login", onLogin);
bot.on("message", onMessage);

bot
  .start()
  .then(() => {
    console.log("开始登陆微信");
  })
  .catch(async function (e) {
    console.log("开始登录微信");
    await bot.stop();
    process.exit(1);
  });

allRouters.forEach((route) => {
  app.use(route.routes());
});

export default app;
