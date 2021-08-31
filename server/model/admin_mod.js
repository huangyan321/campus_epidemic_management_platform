module.exports = class Admin_mod extends require('./model') {
  static getUsersByTypeCharMod(type, inputText, columnData, pageSize, currPage) {
    return new Promise((resolve, reject) => {
      console.log(type);
      type = Number(type);
      pageSize = Number(pageSize);
      currPage = Number(currPage);
      currPage = Number((currPage - 1) * pageSize);
      let sql;
      if (type) {
        sql = "select * from usertable where " + columnData + " like '%" + inputText + "%' and type=" + type + " order by modifytime desc LIMIT ?,?";
      } else {
        sql = "select * from usertable where " + columnData + " like '%" + inputText + "%' order by modifytime desc LIMIT ?,?";
      }
      
      let params = this.formatParams(currPage, pageSize);
      console.log(params);
      this.query(sql, params).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
  static getUsersByTypeCharTotal(type, inputText, columnData) {
    return new Promise((resolve, reject) => {
      type = Number(type);
      let sql;
      if(type) {
        sql= "select * from usertable where " + columnData + " like '%" + inputText + "%' and type=" + type;
      }else {
        sql= "select * from usertable where " + columnData + " like '%" + inputText + "%'"
      }
      this.query(sql).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}