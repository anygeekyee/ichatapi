import Koa from 'koa'
import botRouter from '../router/bot.route.js'
import indexRouter from '../router/index.js'

const app = new Koa()

app.use(botRouter.routes())
   .use(indexRouter.routes())

export default app