import env from '#config/config.default.js'
import app from '#app/index.js'

app.listen(env.APP_PORT, ()=>{
    console.log(`server is running on http://localhost:${env.APP_PORT}`)
})