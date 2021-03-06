var express = require('express');
var router = express.Router();
const admin = require("../dao/admin_dao")
/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("admin路由已挂载")
});
router.get('/getUsersByTypeAndChar', function (req, res, next) {
  admin.getUsersByTypeAndChar(req, res)
})
router.post('/announce', function (req, res, next) {
  admin.announce(req, res)
})
router.get('/getAllNotice', function (req, res, next) {
  admin.getAllNotice(req, res)
})
router.get('/noticeDel', function (req, res, next) {
  admin.noticeDel(req, res)
})
router.get('/getLeave', function (req, res) {
  admin.getLeave(req, res)
})
router.get('/upLeaveState', function (req, res) {
  admin.upLeaveState(req, res)
})
router.get('/getuserLeave', function (req, res) {
  admin.getuserLeave(req, res)
})
module.exports = router;