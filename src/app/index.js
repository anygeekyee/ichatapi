import Koa from "koa";
import allRouters from "#router/index.js";
import { WechatyBuilder } from "wechaty";
import qrcodeTerminal from "qrcode-terminal";

const app = new Koa();
allRouters.forEach(route => {
  app.use(route.routes())
})


console.log(process.env.WECHATY_TOKEN);
// 创建一个微信机器人实例
const bot = WechatyBuilder.build({
  debug: true,
  name: "ichatapi",
  puppet: "wechaty-puppet-wechat",
  puppetOptions: {
    uos: true,
  },
});

async function onScan(qrcode, status) {
  // status: 2代表链接等待调用，3代表链接已打开，这个链接实际上是提供一个登录的二维码供扫描

  if (status === 2) {
    console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`)
    // qrcodeTerminal.generate(qrcode, { small: true }, () => {
    //   console.log(111);
    // });
    // const qrImgUrl = [
    //   "https://api.qrserver.com/v1/create-qr-code/?data=",
    //   encodeURIComponent(qrcode),
    // ].join("");
    // console.log(qrImgUrl);
  }
  }

async function onLogin(user) {
  console.log(`贴心助理${user}登录了`);
}

async function onMessage(msg) {
  console.log(`收到消息：${msg}`);
}

async function onLogout(user) {
  console.log(`用户${user}退出成功`);
}

// 设置 Wechaty 事件监听器
bot
  .on("scan", onScan)
  .on("login", onLogin)
  .on("logout", onLogout)
  .on("message", onMessage)

bot.start()
// .then(() => {
//   console.log("开始登陆微信");
// })
// .catch(async function (e) {
//   console.log("登录微信失败");
//   await bot.stop();
//   process.exit(1);
// });
export default app;
