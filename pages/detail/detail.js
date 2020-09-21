// pages/detail/detail.js

import {getGoodsDetail, GoodsBaseInfo, ShopInfo, ParamInfo, getRecommendData} from '../../service/detail'


//获取app对象
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    iid: '',
    isShow: false,
    topImages: [],
    baseInfo: {},
    shopInfo: {},
    detailInfo: {},
    paramInfo: {},
    commentInfos: {},
    recommends: []
  },

  //-----------------------网络请求数据---------------------------------
  _getGoodsDetailData(iid){
      getGoodsDetail(this.data.iid).then(res =>{
        //获取所以数据
        const data = res.data.result;
        console.log(data)

        //获取轮播图图片
        const topImages = data.itemInfo.topImages;
        // console.log(topImages)

        //获取itemInfo数据
        const baseInfo = new GoodsBaseInfo(data.itemInfo,data.columns,data.shopInfo.services)

        //获取shopInfo数据
        const shopInfo = new ShopInfo(data.shopInfo)

        //获取detailInfo数据
        const detailInfo = data.detailInfo;

        //获取paramInfo数据
        const paramInfo = new ParamInfo(data.itemParams.info,data.itemParams.rule)
      
        //获取评论数据
        let commentInfo = {}

        if(data.rate && data.rate.cRate > 0){
          commentInfo = data.rate.list[0]
        }

        //将数据同步到data中
        this.setData({
          topImages: topImages,
          baseInfo: baseInfo,
          shopInfo: shopInfo,
          detailInfo: detailInfo,
          paramInfo: paramInfo,
          commentInfos: commentInfo
        })
      })
  },

  _getRecommendData(){
    getRecommendData().then(res =>{
      const recommends= res.data.data.list
      this.setData({
        recommends: recommends
      })
    })
  },
  
  //-----------------------普通事件---------------------------------
//监听滚动  
onPageScroll(option){
  const scrollTap = option.scrollTop;
  const temp = scrollTap >= 1000

  if(temp !== this.data.isShow){
    this.setData({
      isShow: temp
    })
  }
},

//购物车数据弹框
  onAddcart(){
    let obj = {};
    obj.iid = this.data.iid;
    obj.imgUrl = this.data.topImages[0];
    obj.title = this.data.baseInfo.title;
    obj.desc = this.data.detailInfo.desc;
    obj.price = this.data.baseInfo.realPrice;

    app.addToCart(obj);

    //购物车成功弹框
    wx.showToast({
      title: '加入购物车成功',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      iid: options.iid
    })
    
    //获取商品详情数据
    this._getGoodsDetailData(this.data.iid)

    //获取商品推荐
    this._getRecommendData()
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