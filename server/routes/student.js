var express = require('express');
var router = express.Router();
const student = require("../dao/student_dao")
/* GET home page. */
router.get('/', function (req, res, next) {
  res.send("student路由已挂载")
});
router.get('/getNotice',function(req,res) {
  student.getNotice(req,res)
});
router.get('/getNoticeRead',function(req,res) {
  student.getNoticeRead(req,res)
})
router.get('/toUnread',function(req,res) {
  student.toUnread(req,res)
})
router.get('/toRead',function(req,res) {
  student.toRead(req,res)
})
module.exports = router;