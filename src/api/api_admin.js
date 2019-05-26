import service from '@/utils/request'
import method from './method_const'

function apiAdminList(data) {
  return service({
    url: '/adminApi/console/admin/list',
    method: method.POST,
    data
  })
}

function apiAdminGet(id) {
  return service({
    url: '/adminApi/console/admin/',
    method: method.GET,
    params: { id }
  })
}

function apiAdminAdd(data) {
  return service({
    url: '/adminApi/console/admin/',
    method: method.POST,
    data
  })
}

function apiAdminUpdate(data) {
  return service({
    url: '/adminApi/console/admin/',
    method: method.PUT,
    data
  })
}

function apiAdminDelete(id) {
  return service({
    url: `/adminApi/console/admin/${id}`,
    method: method.DELETE,
  })
}

export {
  apiAdminAdd,
  apiAdminDelete,
  apiAdminGet,
  apiAdminList,
  apiAdminUpdate
}
