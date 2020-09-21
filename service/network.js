//用于封装request
import {BaseUrl} from './config.js'


export default function(option){
  return new Promise((resolve,reject) =>{
    wx.request({
      url: BaseUrl + option.url,
      method: option.method || 'get',
      data: option.data || {},
      success: resolve,
      fail: reject
    })
  })
}



