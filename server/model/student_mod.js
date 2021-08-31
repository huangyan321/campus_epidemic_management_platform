module.exports = class Student_mod extends require('./model') {
  /**
   * 获取我的通知列表
   * @param {String} classes 
   * @param {Number} currPage 
   * @param {Number} pageSize 
   * @returns 
   */
  static getNoticeMod(classes, currPage, pageSize) {
    pageSize = Number(pageSize);
    currPage = Number(currPage);
    currPage = Number((currPage - 1) * pageSize)
    return new Promise((resolve, reject) => {
      let sql = "select * from notice where class like '%" + classes + "%' order by createtime desc LIMIT ?,?"
      let params = this.formatParams(currPage, pageSize);
      this.query(sql, params).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
  /**
   * 获取我的通知列表总数
   * @param {String} classes 
   * @returns 
   */
  static getNoticetotal(classes) {
    return new Promise((resolve,reject) => {
      let sql = "select * from notice where class like '%" + classes +"%'";
       this.query(sql).then(res => {
         resolve(res.length)
       }).catch(err => {
         reject(err)
       })
    })
  }
}