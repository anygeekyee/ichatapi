import { WechatyBuilder } from "wechaty";
import { onLogin, onLogout, onMessage, onScan } from '#listeners/bot.js'

// 创建一个微信机器人实例
const bot = WechatyBuilder.build({
  debug: true,
  name: "ichatapi",
  puppet: "wechaty-puppet-wechat",
  puppetOptions: {
    uos: true,
  },
});

// 设置 Wechaty 事件监听器
bot
.on("scan", onScan)
.on("login", onLogin)
.on("logout", onLogout)
.on("message", onMessage)


// 机器人api启动机器人，可在发起start时调用
/* bot
  .start()
  .then(() => {
    console.log("开始登陆微信");
  })
  .catch((err) => {
    console.log(err);
    //   await bot.stop();
    //   process.exit(1);
  }); */

export default bot