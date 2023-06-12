const Koa = require('koa')
const app = new Koa()

const botRouter = require('../router/bot.route')
const indexRouter = require('../router/index')
app.use(botRouter.routes())
   .use(indexRouter.routes())

module.exports = app