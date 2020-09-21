// pages/cart/cart.js

//获取公共数据
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartData: [],
    isSelectAll: false,
    totalPrice: 0,
    totalCounter: 0
  },

//全选按钮
  onSelectAll(){
    if(!this.data.isSelectAll){  //所以都没有选中
      this.data.cartData.forEach(item =>{ item.checked = true});
      this.setData({
        cartData: this.data.cartData,
        isSelectAll: true
      })
    }else {
      this.data.cartData.forEach(item =>{
        item.checked = false
      })
      this.setData({
        cartData: this.data.cartData,
        isSelectAll: false
      })
    }
    this.changeData()
  },

  //计算价格和件数
  changeData(){
    let totalPrice = 0;
    let totalCounter = 0;
    for(let item of this.data.cartData){
      if(item.checked){
        totalCounter = totalCounter + item.count
        totalPrice += item.price * item.count
      }
    }
    console.log(totalPrice,totalCounter)
    this.setData({
      totalCounter: totalCounter,
      totalPrice: totalPrice
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //第一次加载数据
    this.setData({
      cartData: app.globalData.list
    })

    //设置购物车回调实现数据同步跟新
    app.addCartCallBack = ()=>{
      this.setData({
        cartData: app.globalData.list
      })
    }

    //设置商品回调状态
    app.changeGoodStatus = (index,goods) =>{
      //修改商品的状态
      this.setData({
        [`cartData[${index}]`] : goods
      })
      // 2.修改全部选中的状态
     const selectAll = !this.data.cartData.find(item => !item.checked)
     this.setData({
       isSelectAll: selectAll
     })
     this.changeData();
    }

    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    //在nav-bar 上显示title和件数
    wx.setNavigationBarTitle({
      title: `购物车(${this.data.cartData.length})`
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})