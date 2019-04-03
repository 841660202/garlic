import request from './index'

export const login = data => request('/login', data, 'GET')
export const upload = data => request('/web/upload/register', data, 'POST')

