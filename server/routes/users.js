var express = require('express');
var router = express.Router();
const user = require('../dao/users_dao')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login',function(req,res,next) {
  user.Login(req,res)
})
router.get('/getUserDataByToken',function(req,res,next) {
  user.getUserDataByToken(req,res)
})
module.exports = router;
