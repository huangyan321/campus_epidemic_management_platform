const mysql = require("mysql")

const pool = mysql.createPool({
	host: '127.0.0.1',
	user: 'root',
	password: 'root',
	port: '3306',
	database: 'my_store'
})

module.exports = class Model {
	static query(sql, params) {
		return new Promise((resolve, reject) => {
			pool.getConnection(function (err, connection) {
				if (err) {
					console.error(err);
					connection.release();
				} else {
					console.log("数据库连接成功");
					console.log("正在同数据库交互....");
					connection.query(sql, params, (err, results) => {
						if (err) {
							reject(err);
							console.error(err);
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
		for (let i = 0; i < arguments.length; i++) {
			arr.push(arguments[i])
		}
		return arr
	}
}