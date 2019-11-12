var express = require('express');
var router = express.Router();
var {users,chapterList} = require('../data.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/list',(req,res,next) => {
  var username = req.body.username;
  var pwd = req.body.pwd;
  console.log(username);
  for(var i = 0;i<users.length;i++){
    if(username == users[i].username && pwd == users[i].password){
      res.render('list',{chapterList:chapterList})
    }else{
      res.set('Content-Type','text/plain; charset=utf-8');    
      res.end("用户名或密码错误！");
    }
  }
})

module.exports = router;