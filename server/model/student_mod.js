const {
	getDate19,
	getNowDay,
	getNowMonth
} = require("../utils/tool")
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
      console.log(sql);
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
		return new Promise((resolve, reject) => {
			let sql = "select * from notice where class like '%" + classes + "%'";
			this.query(sql).then(res => {
				resolve(res.length)
			}).catch(err => {
				reject(err)
			})
		})
	}
	/**
	 * 获取已阅读 的通知
	 * @param {Number} u_id 
	 * @returns 
	 */
	static getNoticeReadMod(u_id) {
		return new Promise((resolve, reject) => {
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
	static toUnreadMod(n_id, u_id) {
		console.log("asdasdasd");
		return new Promise((resolve, reject) => {
			n_id = Number(n_id)
			u_id = Number(u_id)
			let sql = "delete from readtable where n_id=? and u_id=?"
			console.log(sql);
			this.query(sql, this.formatParams(n_id, u_id)).then(res => {
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
	static toReadMod(n_id, u_id) {
		return new Promise((resolve, reject) => {
			n_id = Number(n_id)
			u_id = Number(u_id)
			let readtime = getDate19();
			let sql = "insert into readtable (n_id,u_id,readtime) values (?,?,?)"
			console.log(sql);
			this.query(sql, this.formatParams(n_id, u_id, readtime)).then(res => {
				resolve("已读!")
			}).catch(err => {
				reject(err)
			})
		})
	}
	/**
	 * 个人健康信息填写
	 * @param {Number} 用户id 
	 * @param {Number} 体温 
	 * @param {String} 是否发热 
	 * @param {String} 是否去过湖北 
	 * @param {String} 是否是湖北人 
	 * @param {String} 是否发烧 
	 * @param {String} 是否离开学校 
	 * @param {String} 是否做过核酸 
	 * @param {String} 口罩是否充足 
	 * @param {Number} 口罩数量 
	 * @param {String} 消毒用品是否齐全 
	 * @returns 
	 */
	static setHealthMod(u_id, temperature, hot, gohubei, hubeiren, fever, leaveout, hesuan, mask, masknum, kills) {
		return new Promise((resolve, reject) => {
			u_id = Number(u_id);
			temperature = Number(temperature);
			masknum = Number(masknum);
			let createtime = getDate19();
			let sql = "insert into health (u_id,temperature,hot,gohubei,hubeiren,fever,leaveout,hesuan,mask,masknum,kills,createtime) values  (?,?,?,?,?,?,?,?,?,?,?,?)"
			this.query(sql, this.formatParams(u_id, temperature, hot, gohubei, hubeiren, fever, leaveout, hesuan, mask, masknum, kills, createtime)).then(res => {
				resolve("添加成功")
			}).catch(err => {
				reject(err)
			})
		})
	}
	/**
	 * 根据页码获取当天健康报表
	 * @param {Number} currPage 
	 * @param {Number} pageSize 
	 */
	static gethealthNowDayPageMod(currPage, pageSize) {
		return new Promise((resolve, reject) => {
			currPage = Number(currPage);
			pageSize = Number(pageSize);
			currPage = Number((currPage - 1) * pageSize);
			let nowDay = getNowDay()
			let sql = "select * from health where createtime like '%" + nowDay + "%' order by createtime desc LIMIT ?,?";
			this.query(sql, this.formatParams(currPage, pageSize)).then(res => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	}
	/**
	 * 获取当天健康表总数
	 * @returns 
	 */
	static gethealthNowDayPageTotal() {
		return new Promise((resolve, reject) => {
			let nowDay = getNowDay()
			let sql = "select * from health where createtime like '%" + nowDay + "%'";
			this.query(sql).then(res => {
				resolve(res.length)
			}).catch(err => {
				reject(err)
			})
		})
	}
	/**
	 * 根据id获取当天个人健康报表
	 * @param {Number} 用户id 
	 * @returns 
	 */
	static getHealthNowDayByIdMod(u_id) {
		return new Promise((resolve, reject) => {
			u_id = Number(u_id);
			let nowDay = getNowDay();
			let sql = "select * from health where createtime like '%" + nowDay + "%' and u_id=?";
			this.query(sql, this.formatParams(u_id)).then(res => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	}
	/**
	 * 获取当天健康报表
	 */
	static gethealthNowDayMod() {
		return new Promise((resolve, reject) => {
			let nowDay = getNowDay()
			let sql = "select * from health where createtime like '%" + nowDay + "%' order by createtime";
			this.query(sql).then(res => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	}
	/**
	 * 获取当月健康报表
	 */
	static gethealthNowMonthMod() {
		return new Promise((resolve, reject) => {
			let nowMonth = getNowMonth()
			let sql = "select * from health where createtime like '%" + nowMonth + "%' order by createtime";
			this.query(sql).then(res => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	}
	/**
	 * 获取所有健康报表
	 */
	static getAllHealthMod() {
		return new Promise((resolve, reject) => {
			let sql = "select * from health order by createtime";
			this.query(sql).then(res => {
				resolve(res)
			}).catch(err => {
				reject(err)
			})
		})
	}
	static setLeaveMod(u_id, classes, reason, leavetype, starttime, endtime) {
		return new Promise((resolve, reject) => {
			let createtime = getDate19()
			const sql = "insert into leavetable (u_id,classes,reason,leavetype,starttime,endtime,state,createtime) values (?,?,?,?,?,?,?,?)"
			this.query(sql, this.formatParams(u_id, classes, reason, leavetype, starttime, endtime, 0, createtime)).then(res => {
				resolve("申请已提交")
			}).catch(err => {
				reject(err)
			})
		})
	}
}