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
	/**
	 * 根据班级获取请假审批单
	 * @param {String} 班级 
	 * @param {Number} 当前页 
	 * @param {Number} 页码范围 
	 * @returns 
	 */
	static getLeaveMod(classes, currPage, pageSize) {
		return new Promise((resolve, reject) => {
			currPage = Number(currPage);
			pageSize = Number(pageSize);
			currPage = Number((currPage - 1) * pageSize);
			const sql = "select * from leavetable where classes='" + classes + "' order by createtime desc LIMIT ?,?";
			this.query(sql, this.formatParams(currPage, pageSize)).then(res => {
				resolve(res)
			}).then(err => {
				reject(err)
			})
		})
	}
	/**
	 * 根据班级获取请假审批单总数
	 * @param {String} 班级 
	 * @returns 
	 */
	static getLeavetotal(classes) {
		return new Promise((resolve, reject) => {
			const sql = "select * from leavetable where classes='" + classes + "'";
			this.query(sql).then(res => {
				resolve(res.length)
			}).then(err => {
				reject(err)
			})
		})
	}
/**
 * 请假审批(0:未审批,1:审批通过,2:审批不通过)
 * @param {Number} l_id 
 * @param {Number} 状态 
 * @returns 
 */
	static upLeaveStateMod(l_id, upState) {
		return new Promise((resolve, reject) => {
			l_id = Number(l_id);
			upState = Number(upState);
			const sql = "update leavetable set state =" + upState + " where l_id =" + l_id;
			this.query(sql).then(res => {
				resolve("审批完成")
			}).then(err => {
				reject(err)
			})
		})
	}
}