import service from '@/utils/request'

function apiLogin(data) {
  return service({
    url: '/adminApi/console/admin/login',
    method: 'post',
    data
  })
}

function apiUserInfo(token) {
  return service({
    url: '/adminApi/console/admin/userInfo',
    method: 'get',
    params: { token }
  })
}

function apiLogout() {
  return service({
    url: '/adminApi/console/admin/logout',
    method: 'post'
  })
}

export {
  apiLogin,
  apiLogout,
  apiUserInfo
}
