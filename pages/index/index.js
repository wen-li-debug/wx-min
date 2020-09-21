
import {getMultData, getGoods} from '../../service/home.js'

const type= ['pop','new','sell']

Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles: ['流行','新款','精选'],
    banner: [],
    recommend: [],
    cureentType: 'pop',
    goods: {
      new: {page: 0,list: []},
      pop: {page: 0,list: []},
      sell: {page: 0,list: []}
    },
    isShow: false,
    isFixed: false,
    tabScrollTop: 0
  },

  //--------------------网络请求数据--------------------------

  //获取首页数据
  _getgetMultData(){
    getMultData().then(res =>{
      this.setData({
        banner: res.data.data.banner.list,
        recommend: res.data.data.recommend.list,
      })
    })
  },

  //获取googs商品数据
  _getGoodsData(type){
    //获取页数
    const page = this.data.goods[type].page + 1;

    getGoods(type,page).then(res =>{
      const list = res.data.data.list;
      const oldList = this.data.goods[type].list;
      oldList.push(...list)
      const pagekey = `goods.${type}.page`
      const typekey = `goods.${type}.list`
      this.setData({
        [typekey] : oldList,
        [pagekey] : page
      }) 
    })
  },

  //--------------------其他事件--------------------------

  handleTabClick(event){
    const index = event.detail.index;
    this.setData({
      cureentType: type[index]
    })
  },

//监听滚动  
  onPageScroll(option){
    const scrollTap = option.scrollTop;
    const temp = scrollTap >= 1000

    if(temp !== this.data.isShow){
      this.setData({
        isShow: temp
      })
    }

    const temp1 = scrollTap >= this.data.tabScrollTop;
    if(temp1 !== this.data.isFixed){
      this.setData({
        isFixed: temp1
      })
    }

    // if(option.scrollTop >= 1000){
    //   this.setData({
    //     isShow: true
    //   })
    // }else{
    //   this.setData({
    //     isShow: false
    //   })
    // }
  },

//监听图片
handleImgFixed(){
  wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect =>{
    this.data.tabScrollTop = rect.top;
    console.log(this.data.tabScrollTop)
  }).exec()
},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取首页数据
    this._getgetMultData();

    //获取goods商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
   
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
    this._getGoodsData(this.data.cureentType)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})