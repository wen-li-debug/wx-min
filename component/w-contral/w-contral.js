Component({
  data: {   
    cureent: 0
  },
  properties:{
    titles:{
      type: Array,
      value: []
    }
  },
  methods: {
    contralClick(event){
      //修改cureen值
      this.setData({
        cureent: event.currentTarget.dataset.index
      })
      //触发事件，将cureen值传过去
      const data = {index: this.data.cureent}
      this.triggerEvent('handlecontral',data)
    }
  }
})