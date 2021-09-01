const {getDate19} = require("../utils/tool")
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
  }/**
   * 获取已阅读 的通知
   * @param {Number} u_id 
   * @returns 
   */
  static getNoticeReadMod(u_id) {
    return new Promise((resolve,reject) => {
      let sql = "select * from readtable where u_id=" + u_id  
      this.query(sql).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
/**
 * 已读转未读
 * @returns 
 */
  static toUnreadMod(n_id,u_id) {
    console.log("asdasdasd");
    return new Promise ((resolve,reject) => {
      n_id = Number(n_id)
      u_id = Number(u_id)
      let sql = "delete from readtable where n_id=? and u_id=?"
      console.log(sql);
      this.query(sql,this.formatParams(n_id,u_id)).then(res => {
        resolve("取消已读成功")
      }).catch(err => {
        reject(err)
      })
    })
  }
  /**
   * 未读转已读
   * @returns 
   */
  static toReadMod(n_id,u_id) {
    return new Promise ((resolve,reject) => {
      n_id = Number(n_id)
      u_id = Number(u_id)
      let readtime = getDate19();
      let sql = "insert into readtable (n_id,u_id,readtime) values (?,?,?)"
      console.log(sql);
      this.query(sql,this.formatParams(n_id,u_id,readtime)).then(res => {
        resolve("已读!")
      }).catch(err => {
        reject(err)
      })
    })
  }
}