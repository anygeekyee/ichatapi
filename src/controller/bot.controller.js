class BotController {
    async register(ctx, next) {
        ctx.body = '机器人接入成功'
    }
    async get(ctx, next) {
        ctx.body = 'hello bot!!!'
    }
}

export default new BotController()