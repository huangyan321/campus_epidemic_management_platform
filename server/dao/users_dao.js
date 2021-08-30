const jwt = require("../utils/jwtUtils")
global.globalkey = "123456"

module.exports = class User_dao extends require("../model/users_mod") {
  static async Login(req, res) {
    let body = req.body
    let loginData = await this.userLogin(body.username, body.password, body.type)
    if (loginData) {
      let token = jwt.sign({
        id: loginData[0].id,
        username: loginData[0].username,
        password: loginData[0].password,
        head: loginData[0].head,
        mailbox: loginData[0].mailbox,
        address: loginData[0].address,
        sex: loginData[0].sex,
        createtime: loginData[0].createtime,
        modifytime: loginData[0].modifytimem,
        classes: loginData[0].classes,
        type: loginData[0].type
      }, global.globalkey, 60000)
      res.send({
        data: {
          token,
          id: loginData[0].id
        },
        meta: {
          msg: "登陆成功",
          status: 200
        }
      })
    } else res.status(500).send("用户名或密码错误")
  }
  static async getUserDataByToken(req,res) {
    let result = await jwt.verifysync(req.headers.authorization,global.globalkey);
    res.send({data: {result},meta: {
      msg: "查询成功",
      status: 200
    }})
  }
}