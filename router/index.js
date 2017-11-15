const Router = require('koa-router');

const router = new Router();

router.get('/hello', (ctx) => {
  ctx.body = `${ctx.method}: ${ctx.url}`;
});

router.get('/bye', (ctx) => {
  ctx.body = `${ctx.method}: ${ctx.url}`;
});

module.exports = router;
