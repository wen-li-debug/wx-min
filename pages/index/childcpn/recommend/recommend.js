Component({
  data: {
    isfiexd: false
  },

  properties: {
    recommend:{
      type: Array,
      value: []
    }
  },
  methods: {
    recommendImg(){
      if(!this.data.isfiexd){
        this.data.isfiexd = true
        this.triggerEvent('handleImg')
      }
    }
  }
})