const Router = require('koa-router');
const usersRouter = require('./api/users');

const router = new Router();

router.get('/', (ctx) => {
  ctx.status = 200;
  return ctx.render('index', {
    title: 'Home',
    name: 'Bitzo',
  });
});

router.get('/hello', (ctx) => {
  const name = `bitzo ${Math.random() * 100}`;
  if (ctx.cookies.get('name')) {
    console.log(ctx.cookies.get('name'));
  } else {
    ctx.cookies.set(
      'name',
      name,
      {
        // domain: 'localhost', // 写cookie所在的域名
        // path: '/index', // 写cookie所在的路径
        maxAge: 5 * 60 * 1000, // cookie有效时长
        overwrite: false, // 是否允许重写
        httpOnly: false, // 是否只用于http请求中获取
        expires: new Date('2017-11-19'), // cookie失效时间
      },
    );
  }
  ctx.body = `${ctx.method}: ${ctx.url}`;
});

router.get('/bye', (ctx) => {
  ctx.body = `${ctx.method}: ${ctx.url}`;
});

router.use('/api', usersRouter.routes());

module.exports = router;
