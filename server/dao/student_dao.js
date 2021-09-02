const jwt = require("../utils/jwtUtils")
module.exports = class Student_dao extends require("../model/student_mod") {
	/**
	 * 获取我的通知
	 */
	static async getNotice(req, res) {
		let pageSize = req.query.pageSize;
		let currPage = req.query.currPage;
		let tokenData = await jwt.verifysync(req.headers.authorization, global.globalkey);
		let data = await this.getNoticeMod(tokenData.classes, currPage, pageSize)
		let total = await this.getNoticetotal(tokenData.classes)
		res.send({
			data: {
				data,
				total
			},
			meta: {
				status: 200,
				msg: "获取成功"
			}
		})
	}
	static async getNoticeRead(req, res) {
		let tokenData = await jwt.verifysync(req.query.token, global.globalkey)
		let u_id = tokenData.id
		let data = await this.getNoticeReadMod(u_id)
		res.send({
			data: {
				data
			},
			meta: {
				status: 200,
				msg: "获取成功"
			}
		})
	}
	/**
	 * 已读转未读
	 */
	static async toUnread(req, res) {
		let n_id = req.query.n_id;
		let tokenData = await jwt.verifysync(req.query.token, global.globalkey)
		let u_id = tokenData.id;
		let data = await this.toUnreadMod(n_id, u_id)
		res.send({
			meta: {
				status: 200,
				msg: data
			}
		})
	}
	/**
	 * 未读转已读
	 */
	static async toRead(req, res) {
		let n_id = req.query.n_id;
		let tokenData = await jwt.verifysync(req.query.token, global.globalkey)
		let u_id = tokenData.id;
		let data = await this.toReadMod(n_id, u_id)
		res.send({
			meta: {
				status: 200,
				msg: data
			}
		})
	}
	/**
	 * 健康报表
	 */
	static async setHealth(req, res) {
		let body = req.body;
		let tokenData = await jwt.verifysync(body.token, global.globalkey)
		let u_id = tokenData.id;
		let data = await this.setHealthMod(u_id, body.temperature, body.hot, body.gohubei, body.hubeiren, body.fever, body.leaveout, body.hesuan, body.mask, body.masknum, body.kills)
		res.send({
			meta: {
				status: 200,
				msg: data
			}
		})
	}
	/**
	 * 根据页码获取当天健康报表
	 */
	static async gethealthNowDayPage(req, res) {
		let query = req.query;
		console.log(query);
		let pageSize = query.pageSize;
		let currPage = query.currPage;
		let data = await this.gethealthNowDayPageMod(currPage, pageSize);
		let total = await this.gethealthNowDayPageTotal();
		res.send({
			data: {
				data,
				total
			},
			meta: {
				status: 200,
				msg: "获取成功"
			}
		})
	}
	/**
	 * 根据id获取今日个人健康报表
	 */
	 static async getHealthNowDayById(req, res) {
		let query = req.query;
		let tokenData = await jwt.verifysync(query.token, global.globalkey);
		let u_id = tokenData.id
		let data = await this.getHealthNowDayByIdMod(u_id);
		res.send({
			data: {
				data,
			},
			meta: {
				status: 200,
				msg: "获取成功"
			}
		})
	}
	/**
	 * 获取今日健康报表
	 */
	 static async gethealthNowDay(req, res) {
		let data = await this.gethealthNowDayMod();
		res.send({
			data: {
				data,
			},
			meta: {
				status: 200,
				msg: "获取成功"
			}
		})
	}
	/**
	 * 获取本月健康报表
	 */
	 static async gethealthNowMonth(req, res) {
		let data = await this.gethealthNowMonthMod();
		res.send({
			data: {
				data,
			},
			meta: {
				status: 200,
				msg: "获取成功"
			}
		})
	}
	/**
	 * 获取所有健康报表
	 */
	 static async getAllHealth(req, res) {
		let data = await this.getAllHealthMod();
		res.send({
			data: {
				data,
			},
			meta: {
				status: 200,
				msg: "获取成功"
			}
		})
	}
	static async setLeave(req,res) {
		const body = req.body;
		const tokenData = await jwt.verifysync(body.token, global.globalkey);
		const {id,classes} = tokenData;
		console.log(tokenData);
		const {reason,leavetype,starttime,endtime} = body
		const data = await this.setLeaveMod(id,classes,reason,leavetype,starttime,endtime)
		res.send({
			meta: {
				status: 200,
				msg: data
			}
		})
	}
}