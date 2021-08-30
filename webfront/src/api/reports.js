import request from '@/utils/request'

export function getReports() {
  return request({
    url: '/reports/type/1',
    method: 'get',
  })
}
