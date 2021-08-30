import request from '@/utils/request'

export function getRolesInfo() {
  return request({
    url: '/roles',
    method: 'get',
  })
}
export function addRole(data) {
  return request({
    url: '/roles',
    method: 'post',
    data: data
  })
}
export function deleteRole(id) {
  return request({
    url: `/roles/${id}`,
    method: 'delete',
  })
}
export function deleteRight(roleId,rightId) {
  return request({
    url: `/roles/${roleId}/rights/${rightId}`,
    method: 'delete',
  })
}
export function getRightsTree() {
  return request({
    url: '/rights/tree',
    method: 'get',
  })
}
export function addRight(roleId,rid) {
  return request({
    url: `/roles/${roleId}/rights`,
    method: 'post',
    data: {
      rids: rid
    }
  })
}
export function getRightList(rightType) {
  return request({
    url: `/rights/${rightType}`,
    method: 'get',
  })
}
