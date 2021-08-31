import request from '@/utils/request'

export function fetchUserList(params) {
  return request({
    url: '/users/getUsersByTypePage',
    method: 'get',
    params
  })
}
export function deleteThisUserInfo(id) {
  return request({
    url: `/users/delUserData?id=${id}`,
    method: 'get',
  })
}
