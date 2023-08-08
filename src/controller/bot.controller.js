import bot from "#utils/bot.js"

class BotController {
    // 机器人启动
    async startBot(ctx, next) {
        const response = {
            status: "Success",
            error: ""
        }
        // console.log("receive start bot")
        await bot.start()
           .then(() => {
          })
          .catch((err) => {
            console.log(err);
            response.status = "Failure"
            response.error = err
          });
        ctx.body = response
    }

     // 机器人停止
    async stopBot(ctx, next) {
        // console.log("receive stop bot")
        const response = {
            status: "Success",
            error: ""
        }
        await bot.stop()
           .then(() => {
          })
          .catch((err) => {
            console.log(err);
            response.status = "Failure"
            response.error = err
          });
        ctx.body = response
    }
}

export default new BotController()