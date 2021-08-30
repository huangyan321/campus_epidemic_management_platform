module.exports = class Users_mod extends require('./model') {
  //用户模型
  static userLogin(username,password,type) {
    type = Number(type);
    return new Promise((resolve,reject) =>{
      let sql = "select * from usertable where binary username='" + username +"' and password='" + password +"' and type="+type
      console.log(sql);
      this.query(sql).then((result) => {
        resolve(result)
      }).catch(err => {
        reject("登陆失败")
      })
    } )
  }
}