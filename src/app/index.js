import Koa from 'koa'
import allRouters from '#router/index.js'

const app = new Koa()

allRouters.forEach(route => {
    app.use(route.routes())
});

export default app