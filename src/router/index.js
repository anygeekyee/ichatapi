import Router from 'koa-router'

const indexRouter = new Router()

indexRouter.get('/', (ctx, next)=>{
    ctx.body = 'hello island'
})

export default indexRouter