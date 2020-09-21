//用于页面请求

import request from './network'

//请求banner和recommend数据
export function getMultData(){
  return request({
    url: '/home/multidata'
  })
}

//请求goods数据
export function getGoods(type,page= 1){
  return request({
    url: '/home/data',
    data: {
      type,
      page
    }
  })
}