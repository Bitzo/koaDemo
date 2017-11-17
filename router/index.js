const Router = require('koa-router');
const usersRouter = require('./api/users');

const router = new Router();

router.get('/', (ctx) => {
  ctx.status = 200;
  return ctx.render('index');
});

router.get('/hello', (ctx) => {
  ctx.body = `${ctx.method}: ${ctx.url}`;
});

router.get('/bye', (ctx) => {
  ctx.body = `${ctx.method}: ${ctx.url}`;
});

router.use('/api', usersRouter.routes());

module.exports = router;
