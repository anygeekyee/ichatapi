import Router from 'koa-router'
import Controller from '#controller/bot.controller.js'

export default function(prefix) {
    const router = new Router({ prefix: prefix})

    router.post('/start', Controller.start)

    router.post('/stop', Controller.stop)
    return router
}