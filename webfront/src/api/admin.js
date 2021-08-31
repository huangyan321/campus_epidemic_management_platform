import request from '@/utils/request'

export function getUsersByTypeAndChar(params) {
  return request({
    url: '/admin/getUsersByTypeAndChar',
    method: 'get',
    params
  })
}
