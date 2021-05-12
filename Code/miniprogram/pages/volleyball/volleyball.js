const db = wx.cloud.database();
const cont = db.collection('river_data');
Page({ 
  data: {  
    basics: 0,
    num: 0,
    scroll: 0,
    data: []
  },

  basicsSteps() {
    this.setData({
      basics: this.data.basics == this.data.basicsList.length - 1 ? 0 : this.data.basics + 1
    })
  },
  numSteps() {
    this.setData({
      num: this.data.num == this.data.numList.length - 1 ? 0 : this.data.num + 1
    })
  },
  scrollSteps() {
    this.setData({
      scroll: this.data.scroll == 9 ? 0 : this.data.scroll + 1
    })
  },

  onLoad: function () {
    let taht = this 
    db.collection('activity').where({
      type:'排球'
    }).get({
      success: function(res) {
        console.log('获取成功',res)
        taht.setData({
          data:res.data
        })
        console.log(that.data.data)
      },fail:function(res){
        console.log('获取失败',res)
      }
    })
  },

  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  }
})