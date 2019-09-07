
const { user } = require('../../models');


exports.write = (ctx) => {
  const {
    email,
    name,
  } = ctx.request.body;

  ctx.body = 'hi';
}


exports.read = (ctx) => {
  const { idx } = ctx.params;

  return user.findByIdx(idx).then( (user) => {
    ctx.body = user;
  }).catch((err)=>{

  });
  
}


exports.remove = (ctx) => {

}


exports.replace = (ctx) => {

}

