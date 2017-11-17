const Router = require('koa-router');

const router = new Router();

router.post('/login', (ctx) => {
  const userData = ctx.request.body;
  console.log(userData);
  if (userData.username && userData.password) {
    if (userData.username === 'bitzo' && userData.password === '123456') {
      return ctx.render('success', {
        msg: 'login success!',
      });
    }
  }
  ctx.status = 400;
  return ctx.render('index', {
    error: 'wrong username or password.',
  });
});

module.exports = router;
