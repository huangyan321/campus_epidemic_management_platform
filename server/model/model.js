const mysql = require("mysql")

const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '175947',
  port: '3306',
  database: 'my_store'
})

module.exports = class Model {
  static query(sql,params) {
    return new Promise((resolve,reject) => {
      pool.getConnection(function(err,connection) {
        if(err) {
          console.error(err);
          connection.release();
        } else {
          console.log("数据库连接成功");
          connection.query(sql,params,(err,results) => {
            if(err) {
              console.error(err);
              reject();
            } else {
              resolve(results)
            }
            //结束之后释放连接
            connection.release()
          })
        }
      })
    })
  } 
  static formatParams() {
    let arr = [];
    for(let i=0;i<arguments.length;i++) {
      arr.push(this.arguments[i])
    }
    return arr
  }
}