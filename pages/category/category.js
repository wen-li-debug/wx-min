// pages/categroy/categroy.js
import {getCategory, getSubcategory, getCategoryDetail } from '../../service/category'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: [],
    categoryData: {
      subcategories: [],
      categoryDetail: []
    },
    currentType: 'pop',
    currentIndex: 0
  },

  //-----------------------------网络请求--------------------------------
  //获取子菜单数据
  _getCateGroyData(){
    getCategory().then(res =>{
      this.setData({
        categories: res.data.data.category.list
      })
      this._getSubcategory('0');
      this._getCategoryDetail('0',this.data.currentType);
    })
  },

  //获取分类上方数据
  _getSubcategory(index){
    const maitKey = this.data.categories[index].maitKey;
    getSubcategory(maitKey).then(res => {
      const subcategoryKey = 'categoryData.subcategories'
      this.setData({
        [subcategoryKey] : res.data.data.list
      })
    })
  },

  //获取分类下方数据
  _getCategoryDetail(index,type){
    const miniWallkey = this.data.categories[index].miniWallkey;
    getCategoryDetail(miniWallkey,type).then(res =>{
      const categoryDetailKey = 'categoryData.categoryDetail'
      this.setData({
        [categoryDetailKey] : res.data
      })
    })
  },
  
  //-----------------------------其他事件--------------------------------

  handleMenuItem(event){
    const iid = event.detail;
    this.setData({
      currentIndex: iid
    })
    this._getSubcategory(iid);
    this._getCategoryDetail(iid,this.data.currentType)
  },
  handlecontral(event){
    const type = event.detail.contralType;
    this._getCategoryDetail(this.data.currentIndex,type)
  },

 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getCateGroyData();
    
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