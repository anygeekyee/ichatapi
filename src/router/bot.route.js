import Router from 'koa-router'
import Controller from '#controller/bot.controller.js'

export default function(prefix) {
    const router = new Router({ prefix: prefix})
    router.get('/', Controller.get)

    router.post('/register', Controller.register)
    return router
}