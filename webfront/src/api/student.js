import request from '@/utils/request'
//我的通知分页获取数据与数量
export function getNotice(params) {
  return request({
    url: '/students/getNotice',
    method: 'get',
    params
  })
}
//获取的我通知已读列表(供已读未读状态渲染) 
export function getNoticeRead(params) {
  return request({
    url: '/students/getNoticeRead',
    method: 'get',
    params
  })
}
//已读转未读
export function toUnread(params) {
  return request({
    url: '/students/toUnread',
    method: 'get',
    params
  })
}
//未读转已读
export function toRead(params) {
  return request({
    url: '/students/toUnread',
    method: 'get',
    params
  })
}
//健康填报表
export function setHealth(data) {
  return request({
    url: '/students/setHealth',
    method: 'post',
    data
  })
}
//分页获取当天填报表与总数量
export function gethealthNowDayPage(params) {
  return request({
    url: '/students/gethealthNowDayPage',
    method: 'get',
    params
  })
}
//获取当天某用户报表
export function getHealthNowDayById(params) {
  return request({
    url: '/students/getHealthNowDayById',
    method: 'get',
    params
  })
}
//分页获取当天填报表与总数量
export function gethealthNowDay(params) {
  return request({
    url: '/students/gethealthNowDay',
    method: 'get',
    params
  })
}
//获取当月报表
export function gethealthNowMonth(params) {
  return request({
    url: '/students/gethealthNowMonth',
    method: 'get',
    params
  })
}
//获取所有报表
export function getAllHealth(params) {
  return request({
    url: '/students/getAllHealth',
    method: 'get',
    params
  })
}
//请假申请
export function setLeave(data) {
  return request({
    url: '/students/setLeave',
    method: 'post',
    data
  })
}


