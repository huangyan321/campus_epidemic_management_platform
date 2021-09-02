import request from '@/utils/request'
//根据用户类型进行用户信息获取(分页获取总数量与数据)
export function getUsersByTypePage(params) {
  return request({
    url: '/admin/getUsersByTypePage',
    method: 'get',
    params
  })
}
export function delUserData(params) {
  return request({
    url: '/users/delUserdata',
    method: 'get',
    params
  })
}
export function upDataUserInfo(data) {
  return request({
    url: '/users/upDataUserInfo',
    method: 'post',
    data
  })
}