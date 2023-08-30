import bot from "#utils/bot.js"

class BotController {
    // 机器人启动
    async start(ctx, next) {
        const response = {
            status: "Success",
            error: ""
        }
        // console.log("receive start bot")
        try {
          await bot.start()
        } catch (err) {
            console.log(err);
            response.status = "Failure"
            response.error = err
        } finally {
          ctx.body = response
        }
    }

     // 机器人停止
    async stop(ctx, next) {
        // console.log("receive stop bot")
        const response = {
            status: "Success",
            error: ""
        }
        try {
          await bot.stop()
        } catch (err) {
            console.log(err);
            response.status = "Failure"
            response.error = err
        } finally {
          ctx.body = response
        }
    }
}

export default new BotController()