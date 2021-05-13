// miniprogram/pages/sendMessageTest/sendMessageTest.js
Page({

  //存储模板消息id的全局变量
  data: {
    templateID: ""
  },

  //获取发送给发布者的模板消息id
  requestMessageToMaster: function() {
    const that = this;
    wx.cloud.callFunction({
      name: 'openapi', //指定云函数
      data: {
        op: 'requestMessageToMaster' //指定操作类型
      },
      success: function(res) {
        console.log(res);
        //将模板id存储到全局变量中
        that.setData({
          templateID: res.result
        })
      }
    })
  },

  requestMessageToMember: function() {
    const that = this;
    wx.cloud.callFunction({
      name: 'openapi', //指定云函数
      data: {
        op: 'requestMessageToMember' //指定操作类型
      },
      success: function(res) {
        console.log(res);
        //将模板id存储到全局变量中
        that.setData({
          templateID: res.result
        })
      }
    })
  },

  //订阅消息，获取向用户发送一次消息的权限
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
  sendMessageToMaster: function() {
    wx.cloud.callFunction({
      name: 'openapi', //指定云函数
      data: {
        op: 'sendMessageToMaster', //指定操作类型
        openid: 'oYsqu5benqiKEg1xbcdHjTpCMePI', //发布者的openid
        name: "zestaken",  //申请者名字
        phone: "1224649136" //申请者电话号码
      },
      success: function(res) {
        console.log(res);
      }
    })
  },

  sendMessageToMember: function() {
    wx.cloud.callFunction({
      name: 'openapi', //指定云函数
      data: {
        op: 'sendMessageToMember', //指定操作类型
        openid: 'oYsqu5benqiKEg1xbcdHjTpCMePI', //申请者的openid
        activityName: "篮球",  //活动名称
        time: '2021-05-12 00:00:00', //申请日期
        remark: "备注信息：" //发给申请者的备注信息
      },
      success: function(res) {
        console.log(res);
      }
    })
  }
})