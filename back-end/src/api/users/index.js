const Router = require('koa-router');
const userCtrl = require('./users.ctrl');

const users = new Router();

//users.get('/', userCtrl.list);
users.get('/:idx', userCtrl.read);
users.post('/', userCtrl.write);


module.exports = users;