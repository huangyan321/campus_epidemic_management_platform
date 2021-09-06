import request from '@/utils/request'
//根据用户类型与查询字段模糊查询 (数据与总数量返回) 
export function getUsersByTypeAndChar(params) {
  return request({
    url: '/admin/getUsersByTypeAndChar',
    method: 'get',
    params
  })
}
//发布通知
export function announce(data) {
  return request({
    url: '/admin/announce',
    method: 'post',
    data
  })
}
//通知删除
export function noticeDel(params) {
  return request({
    url: '/admin/noticeDel',
    method: 'get',
    params
  })
}
//获取所有通知与数量(分页获取)
export function getAllNotice(params) {
  return request({
    url: '/admin/getAllNotice',
    method: 'get',
    params
  })
}

//获取该老师所属班级的全部请假单与数量(分页查询)
export function getLeave(params) {
  return request({
    url: '/admin/getLeave',
    method: 'get',
    params
  })
}
//获取该用户请假审批与数量(分页) 
export function getuserLeave(params) {
  return request({
    url: '/admin/getuserLeave',
    method: 'get',
    params
  })
}
//当前请假单审批(修改审批状态) 
export function upLeaveState(params) {
  return request({
    url: '/admin/upLeaveState',
    method: 'get',
    params
  })
}