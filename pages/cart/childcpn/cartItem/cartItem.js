// pages/cart/childcpn/cartitem/cartItem.js

const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsList: {
      type: Object,
      value: {}
    },
    index: {
      type: Number,
      vaule: 0
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
    onCheckClick(event){
      //获取点击的对象
      const goods = app.globalData.list.find(item => item.iid === this.properties.goodsList.iid)
      goods.checked = !goods.checked;

      //查找对应商品iid
      const index = event.currentTarget.dataset.index;

      //回调刷新数据
      app.changeGoodStatus(index,goods)

      
    }
  }
})
