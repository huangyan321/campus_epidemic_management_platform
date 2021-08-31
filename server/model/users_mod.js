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
  static getUsersByTypePageMod(type, currPage, pageSize) {
    type = Number(type);
    pageSize = Number(pageSize);
    currPage = Number(currPage);
    currPage = Number((currPage-1) * pageSize)
    console.log(currPage);
    return new Promise((resolve, reject) => {
      let sql;
      if (type) {
        sql = "select * from usertable where type= " + type + " LIMIT ?,?"
      } else {
        sql = "select * from usertable LIMIT ?, ?"
      }
      let params = this.formatParams(currPage , pageSize);
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
      let sql;
      if (type) {
        sql = "select * from usertable where type= " + type
      } else {
        sql = "select * from usertable"
      }
      this.query(sql).then(res => {
        resolve(res.length)
      }).catch(err => {
        reject(err)
      })
    })
  }
}