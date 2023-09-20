import Koa from "koa";
import cors from "koa2-cors";
import allRouters from "#router/index.js";

const app = new Koa();
app.use(cors())
allRouters.forEach(route => {
  app.use(route.routes())
})

export default app;
