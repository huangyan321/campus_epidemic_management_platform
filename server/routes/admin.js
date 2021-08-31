var express = require('express');
var router = express.Router();
const admin = require("../dao/admin_dao")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("admin路由已挂载")
});
router.get('/getUsersByTypeAndChar',function(req,res,next) {
  admin.getUsersByTypeAndChar(req,res)
})
router.post('/announce',function(req,res,next) {
  admin.announce(req,res)
})
router.get('/getAllNotice',function (req, res, next) {
  admin.getAllNotice(req, res)
})
module.exports = router;
