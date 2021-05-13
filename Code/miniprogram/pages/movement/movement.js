const app = getApp();
const db = wx.cloud.database();
const cont = db.collection('river_data');
Page({ 
  data: {
    data:[]
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
  },
  ChooseCheckbox(e) {
    let items = this.data.checkbox;
    let values = e.currentTarget.dataset.value;
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      if (items[i].value == values) {
        items[i].checked = !items[i].checked;
        break
      }
    }
    this.setData({
      checkbox: items
    })
  },

  onLoad: function () {
    let taht = this 
    db.collection('item').where({
      type:'运动'
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
  }
})