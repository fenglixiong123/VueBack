import request from '@/utils/request'

function login(data) {
  return request({
    url: '/adminApi/console/admin/login',
    method: 'post',
    data
  })
}

function getInfo(token) {
  return request({
    url: '/admin/info',
    method: 'get',
    params: { token }
  })
}

function logout() {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}

export {
  login,
  logout,
  getInfo
}
