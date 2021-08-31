const jwt = require("../utils/jwtUtils")
module.exports = class Student_dao extends require("../model/student_mod") {
  /**
   * 获取我的通知
   */
  static async getNotice(req, res) {
    let pageSize = req.query.pageSize;
    let currPage = req.query.currPage;
    let tokenData = await jwt.verifysync(req.query.token, global.globalkey);
    let data = await this.getNoticeMod(tokenData.classes, currPage, pageSize)
    let total = await this.getNoticetotal(tokenData.classes)
    res.send({
      data: {
        data,
        total
      },
      meta: {
        status: 200,
        msg: "获取成功"
      }
    })
  }
}