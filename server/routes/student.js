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
module.exports = router;