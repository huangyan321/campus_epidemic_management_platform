module.exports = class Users_mod extends require('./model') {
  //用户模型
  static userLogin(username, password, type) {
    type = Number(type);
    return new Promise((resolve, reject) => {
      let sql = "select * from usertable where binary username='" + username + "' and password='" + password + "' and type=" + type
      console.log(sql);
      this.query(sql).then((result) => {
        resolve(result)
      }).catch(err => {
        reject("登陆失败")
      })
    })
  }
  static getUsersByTypePageMod(type, pageSize, currPage) {
    type = Number(type);
    pageSize = Number(pageSize);
    currPage = Number(currPage);
    currPage = Number(currPage * pageSize)
    return new Promise((resolve, reject) => {
      let sql = "select * from usertable where type= " + type + " LIMIT ?,?"
      let params = this.formatParams(currPage, pageSize);
      this.query(sql, params).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
  static getUsersByTypePageTotal(type) {
    type = Number(type);
    return new Promise((resolve, reject) => {
      let sql = "select * from usertable where type= " + type
      this.query(sql).then(res => {
        resolve(res.length)
      }).catch(err => {
        reject(err)
      })
    })
  }
}