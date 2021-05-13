// miniprogram/pages/sendMessageTest/sendMessageTest.js
Page({

  data: {
    templateID: ""
  },

  //订阅消息
  request: function() {
    const that = this;
    wx.cloud.callFunction({
      name: 'openapi',
      data: {
        action: 'requestSubscribeMessage'
      },
      success: function(res) {
        console.log(res);
        that.setData({
          templateID: res.result
        })
      }
    })
  },

  subscribeMessage: function() {
    const templateID = this.data.templateID;
    wx.requestSubscribeMessage({
      tmplIds: [templateID],
      success: function(res) {
        console.log(res)
      }
    })
  },

  //发布消息
  send: function() {
    wx.cloud.callFunction({
      name: 'openapi',
      data: {
        action: 'sendSubscribeMessage',
        name: "zestaken",
        phone: "1224649136"
      },
      success: function(res) {
        console.log(res);
      }
    })
  }
})