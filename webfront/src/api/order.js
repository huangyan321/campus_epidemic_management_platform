import request from '@/utils/request'

export function getOrderList(data) {
  return request({
    url: '/orders',
    method: 'get',
    params: data
  })
}

export function getProgress() {
  return request({
    url: '/kuaidi/804909574412544580',
    method: 'get',
  })
}
