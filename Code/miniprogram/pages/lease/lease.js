const app = getApp();
const db = wx.cloud.database();
const cont = db.collection('river_data');

Page({
  data: {
  },
  switchRightTab: function (e) {
    let id = e.target.dataset.id,
    index = parseInt(e.target.dataset.index);
    this.setData({
      curNav: id,
      curIndex: index
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
  },

  onLoad: function(event){
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
  },

  onLoad1: function(event){
    let taht = this 
    db.collection('item').where({
      type:'书'
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

  onLoad2: function(event){
    let taht = this 
    db.collection('item').where({
      type:'拼车'
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
  }
})
