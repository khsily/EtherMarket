require('dotenv').config();

const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser')
const mysql = require('mysql2');
const Sequelize = require('sequelize');

// const {
//   POST: port = 4000,
//   MYSQL_URL : mysqlURL
// } = process.env;


const api = require('./api');

const app = new Koa();
const router = new Router();

router.use('/api',  api.routes());


app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('listening to port 4000');
})