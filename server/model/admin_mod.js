module.exports = class Admin_mod extends require('./model') {
  /**
   * 
   * @param {Number} type 
   * @param {String} inputText 
   * @param {String} columnData 
   * @param {Number} pageSize 
   * @param {Number} currPage 
   * @returns 查询结果列表
   */
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
      this.query(sql, params).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
  /**
   * 获取总数
   * @param {Number} type 
   * @param {String} inputText 
   * @param {String} columnData 
   * @returns 搜索用户总量
   */
  static getUsersByTypeCharTotal(type, inputText, columnData) {
    return new Promise((resolve, reject) => {
      type = Number(type);
      let sql;
      if (type) {
        sql = "select * from usertable where " + columnData + " like '%" + inputText + "%' and type=" + type;
      } else {
        sql = "select * from usertable where " + columnData + " like '%" + inputText + "%'"
      }
      this.query(sql).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
  /**
   * 发布通知
   * @param {String} 标题 
   * @param {String} 由;组成的班级数组字符串 
   * @returns 
   */
  static announceMod(title, classes) {
    return new Promise((resolve, reject) => {
      let sql = "insert into notice (title,class) values (?,?)"
      this.query(sql, this.formatParams(title, classes)).then(res => {
        resolve("发布成功")
      }).catch(err => {
        reject(err)
      })
    })
  }
  /**
   * 获取通知列表
   * @param {Number} pageSize 
   * @param {Number} currPage 
   * @returns 
   */
  static getAllNoticeMod(pageSize, currPage) {
    return new Promise((resolve, reject) => {
      pageSize = Number(pageSize);
      currPage = Number(currPage);
      currPage = Number((currPage - 1) * pageSize);
      let sql = "select * from notice order by 'createtime' desc LIMIT ?,?";
      let params = this.formatParams(currPage, pageSize);
      console.log(params);
      this.query(sql, params).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
  /**
   * 获取通知列表总数
   * @returns 
   */
  static getAllNoticeTotal() {
    return new Promise((resolve, reject) => {
      let sql = "select * from notice";
      this.query(sql).then(res => {
        resolve(res.length)
      }).catch(err => {
        reject(err)
      })
    })
  }
}