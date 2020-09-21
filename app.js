App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */

  //公共数据
  globalData : {
    list: []
  },


   //设置一个公有的数据，购物车数据
   addToCart(obj){
     //判断购物车中是否有这件物品
    const oldInfo = this.globalData.list.find((item) => item.iid === obj.iid)
    if(oldInfo){
      //存在数量加一
      oldInfo.count += 1
    }else{
      //不存在，加入购物车
      obj.count = 1;
      obj.checked = false;
      this.globalData.list.push(obj);
    }
    //设置购物车回调实现数据同步跟新
    if(this.addCartCallBack){
      this.addCartCallBack()
    }
    console.log(this.globalData)
   },


  onLaunch: function () {
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
