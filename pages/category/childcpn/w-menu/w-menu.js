// pages/category/childcpn/w-menu/w-menu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    categories: {
      type: Array,
      value: []
    },
    currentIndex:{
      type: Number,
      value: 0
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
    onItemClick(event){
      const index = event.currentTarget.dataset.index;
      this.triggerEvent('handleMenuItem',index)
    }
  }
})
