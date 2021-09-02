const {
	getDate19
} = require("../utils/tool")
module.exports = class Users_mod extends require('./model') {
	//用户模型
	/**
	 * 用户登录
	 * @param {String} 用户名 
	 * @param {String} 密码 
	 * @param {Number} 用户类型(1:管理员，2:学生，3:老师)
	 * @returns Promise
	 */
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
	/**
	 * 获取用户列表(无条件)
	 * @param {Number} 用户类型(1:管理员，2:学生，3:老师)
	 * @param {Number} 当前页码 
	 * @param {Number} 每页数量 
	 * @returns Promise
	 */
	static getUsersByTypePageMod(type, currPage, pageSize) {
		type = Number(type);
		pageSize = Number(pageSize);
		currPage = Number(currPage);
		currPage = Number((currPage - 1) * pageSize)
		console.log(currPage);
		return new Promise((resolve, reject) => {
			let sql;
			if (type) {
				sql = "select * from usertable where type= " + type + " LIMIT ?,?"
			} else {
				sql = "select * from usertable LIMIT ?, ?"
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
	 * 获取当前列表总数
	 * @param {Number} 用户类型(1:管理员，2:学生，3:老师) 
	 * @returns Promise
	 */
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
	/**
	 * 
	 * @param {String} 用户id 
	 * @returns Promise
	 */
	static delUserDataMod(id) {
		return new Promise((resolve, reject) => {
			let sql = "delete from usertable where id= " + id
			this.query(sql).then(res => {
				resolve("删除用户成功")
			}).catch(err => {
				reject(err)
			})
		})
	}
	static upDataUserInfoMod(id, username, sex, address, type) {
		return new Promise((resolve, reject) => {
			let modifytime = getDate19();
			let sql = "update usertable set username='" + username + "',sex='" + sex + "',address='" + address + "',type=" + type + ",modifytime='" + modifytime +
				"' where id=" + id
			this.query(sql).then(res => {
				resolve("修改成功")
			}).catch(err => {
				reject(err)
			})
		})
	}
}