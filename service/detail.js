import request from  './network'

//商品详情界面

export function getGoodsDetail(iid){
  return request({
          url: '/detail',
          data: {
            iid
          }
        })
}

export function getRecommendData(){
  return request({
    url: '/recommend'
  })
}


export class GoodsBaseInfo {
  constructor(itemInfo,columns,services){
    this.title = itemInfo.title;
    this.newprice = itemInfo.price;
    this.oldprice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowNowPrice;
  }
}

export class ShopInfo {
  constructor(shopInfo){
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.goodsCount = shopInfo.cGoods;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
  }
}

export class ParamInfo {
  constructor(info,rule){
    this.image = info.images ? info.images[0] : '';
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}