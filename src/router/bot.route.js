const Router = require('koa-router')

const {register, get} = require('../controller/bot.controller')
const router = new Router({ prefix: '/bot'})

router.get('/', get)

router.post('/register', register)

module.exports = router