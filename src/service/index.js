import Taro from '@tarojs/taro'
import '@tarojs/async-await'
import HTTP_STATUS from './status'
import base from './config'
import logError from '../utils/log'

const token = ''

export default (url, data, method) => {
  console.log('url', url)
  console.log('data', data)
  let contentType = 'application/x-www-form-urlencoded'
  const option = {
    isShowLoading: false,
    loadingText: '正在加载',
    url: base + url,
    data: data,
    method: method,
    header: {'content-type': contentType, 'token': token},
    success(res) {
      if (res.statusCode === HTTP_STATUS.NOT_FOUND) {
        return logError('api', '请求资源不存在')
      } else if (res.statusCode === HTTP_STATUS.BAD_GATEWAY) {
        return logError('api', '服务端出现了问题')
      } else if (res.statusCode === HTTP_STATUS.FORBIDDEN) {
        return logError('api', '没有权限访问')
      } else if (res.statusCode === HTTP_STATUS.SUCCESS) {
        return res.data
      }
      console.log(res.data)
    },
    error(e) {
      logError('api', '请求接口出现问题', e)
    }
  }
  return new Promise((resolve) => {
    Taro.request(option).then((rs,) => {
      resolve(rs)
    })
  })
}
