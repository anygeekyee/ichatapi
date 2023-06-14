import Router from 'koa-router'
import Controller from '#controller/bot.controller.js'

const router = new Router({ prefix: '/bot'})

router.get('/', Controller.get)

router.post('/register', Controller.register)

export default router