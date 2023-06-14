import env from '#config/config.default.js'
import app from '#app/index.js'
// const app = require('./app')

app.listen(env.APP_PORT, ()=>{
    console.log(`server is running on http://localhost:${env.APP_PORT}`)
})