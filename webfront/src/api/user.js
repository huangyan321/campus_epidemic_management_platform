import request from '@/utils/request'

export function fetchUserList(params) {
  return request({
    url: '/users',
    method: 'get',
    params
  })
}
export function fetchUserPageList(id,mg_state) {
  return request({
    url: `/users/${id}/state/${mg_state}`,
    method: 'put',
  })
}
export function addUser(data) {
  return request({
    url: `/users`,
    method: 'post',
    data
  })
}
export function getThisUserInfo(id) {
  return request({
    url: `/users/${id}`,
    method: 'get',
  })
}
export function saveUserInfo(id,data) {
  return request({
    url: `/users/${id}`,
    method: 'put',
    data: data
  })
}
export function deleteThisUserInfo(id) {
  return request({
    url: `/users/${id}`,
    method: 'delete',
  })
}
export function getAllRolesList(id,data) {
  return request({
    url: `/roles`,
    method: 'get',
  })
}
export function rolesAssign(id,rid) {
  return request({
    url: `/users/${id}/role`,
    method: 'put',
    data: {
      rid: rid
    }
  })
}
