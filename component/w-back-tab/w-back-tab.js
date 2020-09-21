// component/w-back-tab/w-back-tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow: {
      type: Boolean,
      value: false
    }
  },
  // externalClasses: ['backtabClass'],
  // options: {
  //   styleIsolation: 'shared'
  // },

  /**
   * 组件的初始数据
   */
  data: {
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    backTabClick(){
      wx.pageScrollTo({
        scrollTop: 0,
      })
    }
  }
})
