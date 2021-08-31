module.exports = class Admin_dao extends require("../model/admin_mod") {
  static async getUsersByTypeAndChar(req, res) {
    const query = req.query;
    let data = await this.getUsersByTypeCharMod(query.type, query.inputText, query.columnData,query.pageSize,query.currPage)
    let total = await this.getUsersByTypeCharTotal(query.type, query.inputText, query.columnData)
    
    res.send({data: {data,total:total.length},meta: {
      msg: "查询成功",
      status: 200
    }})
  }
}