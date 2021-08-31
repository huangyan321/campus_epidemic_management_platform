module.exports = class Admin_dao extends require("../model/admin_mod") {
  /**
   * 根据字段模糊查询
   */
  static async getUsersByTypeAndChar(req, res) {
    const query = req.query;
    let data = await this.getUsersByTypeCharMod(query.type, query.inputText, query.columnData,query.pageSize,query.currPage)
    let total = await this.getUsersByTypeCharTotal(query.type, query.inputText, query.columnData)
    res.send({data: {data,total:total.length},meta: {
      msg: "查询成功",
      status: 200
    }})
  }
  /**
   * 发布通知
   */
  static async announce(req,res) {
    const body = req.body;
    let data = await this.announceMod(body.title,body.classes)
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
    console.log("asdasd");
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
  
}