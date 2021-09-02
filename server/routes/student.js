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
router.post('/setHealth',function(req,res) {
  student.setHealth(req,res)
})
router.get('/gethealthNowDayPage',function(req,res) {
	student.gethealthNowDayPage(req,res)
})
router.get('/getHealthNowDayById',function(req,res) {
	student.getHealthNowDayById(req,res)
})
router.get('/gethealthNowDay',function(req,res) {
	student.gethealthNowDay(req,res)
})
router.get('/gethealthNowMonth',function(req,res) {
	student.gethealthNowMonth(req,res)
})
router.get('/getAllHealth',function(req,res) {
	student.getAllHealth(req,res)
})
router.post('/setLeave',function(req,res) {
	student.setLeave(req,res)
})
module.exports = router;