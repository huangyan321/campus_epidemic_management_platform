const jwt = require("../utils/jwtUtils")

module.exports = class Admin_dao extends require("../model/admin_mod") {
  /**
   * 根据字段模糊查询
   */
  static async getUsersByTypeAndChar(req, res) {
    const query = req.query;
    let data = await this.getUsersByTypeCharMod(query.type, query.inputText, query.columnData, query.pageSize, query.currPage)
    let total = await this.getUsersByTypeCharTotal(query.type, query.inputText, query.columnData)
    res.send({
      data: {
        data,
        total: total.length
      },
      meta: {
        msg: "查询成功",
        status: 200
      }
    })
  }
  /**
   * 发布通知
   */
  static async announce(req, res) {
    const body = req.body;
    let data = await this.announceMod(body.title, body.classes)
    res.send({
      meta: {
        msg: data,
        status: 200
      }
    })
  }
  /**
   * 获取通知列表
   */
  static async getAllNotice(req, res) {
    const query = req.query;
    let data = await this.getAllNoticeMod(query.pageSize, query.currPage)
    let total = await this.getAllNoticeTotal()
    res.send({
      data: {
        data,
        total
      },
      meta: {
        msg: "获取成功",
        status: 200
      }
    })
  }
  /**
   * 通知删除
   */
  static async noticeDel(req, res) {
    const query = req.query;
    const {
      n_id
    } = query;
    let data = await this.noticeDelMod(n_id)
    res.send({
      meta: {
        msg: data,
        status: 200
      }
    })
  }
  static async getuserLeave(req, res) {
    const query = req.query;
    const tokenData = await jwt.verifysync(req.headers.authorization, global.globalkey);
    const {
      id
    } = tokenData
    const {
      currPage,
      pageSize
    } = query;
    const data = await this.getuserLeaveMod(id, currPage, pageSize)
    const total = await this.getuserLeaveTotal(id)
    res.send({
      data: {
        data,
        total
      },
      meta: {
        msg: "获取成功",
        status: 200
      }
    })
  }
  /**
   * 获取请假审批单
   */
  static async getLeave(req, res) {
    const query = req.query;
    const tokenData = await jwt.verifysync(req.headers.authorization, global.globalkey);
    const {
      classes
    } = tokenData;
    const {
      currPage,
      pageSize
    } = query;
    const data = await this.getLeaveMod(classes, currPage, pageSize)
    const total = await this.getLeavetotal(classes)
    res.send({
      data: {
        data,
        total
      },
      meta: {
        msg: "获取成功",
        status: 200
      }
    })
  }
  /**
   * 请假审批(0:未审批,1:审批通过,2:审批不通过)
   */
  static async upLeaveState(req, res) {
    const query = req.query;
    const {
      l_id,
      upState
    } = query;
    const data = await this.upLeaveStateMod(l_id, upState)
    res.send({
      meta: {
        msg: data,
        status: 200
      }
    })
  }
}