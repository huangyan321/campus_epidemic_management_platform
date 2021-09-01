const jwt = require("../utils/jwtUtils")
module.exports = class Student_dao extends require("../model/student_mod") {
  /**
   * 获取我的通知
   */
  static async getNotice(req, res) {
    let pageSize = req.query.pageSize;
    let currPage = req.query.currPage;
    let tokenData = await jwt.verifysync(req.headers.authorization, global.globalkey);
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
  static async getNoticeRead(req, res) {
    let tokenData = await jwt.verifysync(req.query.token, global.globalkey)
    let u_id = tokenData.id
    let data = await this.getNoticeReadMod(u_id)
    res.send({
      data: {
        data
      },
      meta: {
        status: 200,
        msg: "获取成功"
      }
    })
  }
  static async toUnread(req, res) {
    let n_id = req.query.n_id;
    let tokenData = await jwt.verifysync(req.query.token, global.globalkey)
    let u_id = tokenData.id;
    let data = await this.toUnreadMod(n_id, u_id)
    res.send({
      meta: {
        status: 200,
        msg: data
      }
    })
  }
  static async toRead(req, res) {
    let n_id = req.query.n_id;
    let tokenData = await jwt.verifysync(req.query.token, global.globalkey)
    let u_id = tokenData.id;
    let data = await this.toReadMod(n_id, u_id)
    res.send({
      meta: {
        status: 200,
        msg: data
      }
    })
  }
}