const app = getApp();
const db = wx.cloud.database();
const cont = db.collection('river_data');

Page({
  data: {  
    basics: 0,
    num: 0,
    scroll: 0,
    data:[] 
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
      scroll: this.data.scroll == 10 ? 0 : this.data.scroll + 1
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
    wx.cloud.callFunction({
      name: 'activity',
      data: {
        op: 'queryAll',
      }, 
      success: function(res) {
        //查看返回数据
        taht.setData({
          data:res.result.data
        })
        console.log(res);
        console.log(res.result);
        console.log(res.result.data);
        console.log(res.result.data[0]);
      }
    })
  },

  onLoad1: function(event){
    let taht = this 
    db.collection('activity').where({
      type:'篮球'
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
    db.collection('activity').where({
      type:'网球'
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

  onLoad3: function(event){
    let taht = this 
    db.collection('activity').where({
      type:'乒乓球'
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
  
  onLoad4: function(event){
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
  
  onLoad5: function(event){
    let taht = this 
    db.collection('activity').where({
      type:'羽毛球'
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

  onLoad6: function(event){
    let taht = this 
    db.collection('activity').where({
      type:'足球'
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
