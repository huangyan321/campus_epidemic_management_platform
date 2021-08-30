import request from '@/utils/request'

export function getGoodsList(data) {
  return request({
    url: '/goods',
    method: 'get',
    params: data
  })
}

export function goodDelete(id) {
  return request({
    url: `/goods/${id}`,
    method: 'delete',
  })
}
export function getCategories(data) {
  return request({
    url: `/categories`,
    method: 'get',
    params: data
  })
}
export function getParams(cateId,data) {
  return request({
    url: `/categories/${cateId}/attributes`,
    params: data,
    method: 'get'
  })
}
export function addGoods(form) {
  return request({
    url: `/goods`,
    data: form,
    method: 'post',
  })
}

export function addCate(form) {
  return request({
    url: `/categories`,
    data: form,
    method: 'post',
  })
}
export function addParams(cateId,form) {
  return request({
    url: `/categories/${cateId}/attributes`,
    data: form,
    method: 'post',
  })
}
