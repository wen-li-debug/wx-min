// component/w-goods-item/w-goods-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goods:{
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    detailTo(){
      const iid = this.data.goods.iid;
      wx.navigateTo({
        url: '/pages/detail/detail?iid=' + iid,
      })
    }
  }
})
