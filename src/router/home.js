import Router from 'koa-router'

export default function(prefix) {
    const router = new Router({ prefix: prefix})
    router.get('/', (ctx, next)=>{
        ctx.body = 'hello island'
    })
    return router
}
