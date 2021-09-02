const jwt = require("../utils/jwtUtils")

module.exports = class User_dao extends require("../model/users_mod") {
	/**
	 * 登录接口
	 */
	static async Login(req, res) {
		let body = req.body
		let loginData = await this.userLogin(body.username, body.password, body.type)
		console.log(loginData);
		if (loginData.length) {
			let token = jwt.sign({
				id: loginData[0].id,
				username: loginData[0].username,
				password: loginData[0].password,
				head: loginData[0].head,
				mailbox: loginData[0].mailbox,
				address: loginData[0].address,
				sex: loginData[0].sex,
				createtime: loginData[0].createtime,
				modifytime: loginData[0].modifytimem,
				classes: loginData[0].classes,
				type: loginData[0].type
			}, global.globalkey, '1day')
			res.send({
				data: {
					token,
					id: loginData[0].id
				},
				meta: {
					msg: "登陆成功",
					status: 200
				}
			})
		} else res.send({
			meta: {
				msg: "账号或密码错误",
				status: 400
			}
		})
	}
	/**
	 * 根据token获取用户信息
	 */
	static async getUserDataByToken(req, res) {
		let result = await jwt.verifysync(req.headers.authorization, global.globalkey);
		console.log(result);
		res.send({
			data: {
				result
			},
			meta: {
				msg: "查询成功",
				status: 200
			}
		})
	}
	/**
	 * 获取用户列表
	 */
	static async getUsersByTypePage(req, res) {
		let query = req.query;
		let data = await this.getUsersByTypePageMod(query.type, query.currPage, query.pageSize)
		let total = await this.getUsersByTypePageTotal(query.type)
		res.send({
			data: {
				data,
				total
			},
			meta: {
				msg: "查询成功",
				status: 200
			}
		})
	}
	/**
	 * 用户删除
	 */
	static async delUserData(req, res) {
		let query = req.query;
		if (query.id === '101') {
			res.send({
				meta: {
					status: 500,
					msg: '您不能删除管理员'
				}
			})
		} else {
			let data = await this.delUserDataMod(query.id)
			res.send({
				meta: {
					status: 200,
					msg: data
				}
			})
		}
	}
	/**
	 * 修改用户信息
	 */
	static async upDataUserInfo(req, res) {
		let body = req.body;
		let data = await this.upDataUserInfoMod(body.id, body.username, body.sex, body.address, body.type)
		res.send({
			meta: {
				status: 200,
				msg: data
			}
		})
	}
}