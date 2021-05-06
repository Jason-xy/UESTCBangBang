
// miniprogram/pages/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  addUser: function() {
    wx.cloud.callFunction({
      name: "user",
      data: {
        op:'add', //指定操作类型
        image: 'cloud://cloud1-5gjnayyifcd4e2a2.636c-cloud1-5gjnayyifcd4e2a2-1305715476/00d1d8a848b34c8ca29fb3e7c89f1cd0.jpg', //上传图片后获取的fileid
        phone: '1224649136' , //电话号码字符串
        tags:['运动', '生活', 'test'], //用户标签字符串数组
      },
      success: function(res) {
         //查看返回数据
        console.log(res);
        console.log(res.result);
        console.log(res.result._id);
      }
    })
  },
  
  queryCurrent: function() {
    wx.cloud.callFunction({
      name: 'user',
      data: {
        op: 'queryCurrent' //指定操作类型
      },
      success: function(res) {
        //查看返回数据
        console.log(res); 
        console.log(res.result);
        console.log(res.result.data);
        console.log(res.result.data[0]);
      }
    })
  },

  queryAll:function() {
    wx.cloud.callFunction({
      name: 'user',
      data: {
        op: 'queryAll' //指定操作类型
      },
      success: function(res) {
         //查看返回数据
        console.log(res);
        console.log(res.result);
        console.log(res.result.data);
        console.log(res.result.data[0]);
      }
    })
  },

  removeUser: function() {
    wx.cloud.callFunction({
      name: "user",
      data: {
        op: 'remove' //指定操作类型
      },
      success: function(res) {
        //查看返回数据
        console.log(res) 
        console.log(res.result)
        console.log(res.result.stats)
        console.log(res.result.stats.removed) //删除的记录条数
      }
    })
  },

  updateCurrent: function() {
    wx.cloud.callFunction({
      name: 'user',
      data: {
          op:'update', //指定操作类型
          image: 'cloud://cloud1-5gjnayyifcd4e2a2.636c-cloud1-5gjnayyifcd4e2a2-1305715476/00d1d8a848b34c8ca29fb3e7c89f1cd0.jpg', //上传图片后获取的fileid
          phone: '1224649136' , //电话号码字符串
          tags:['运动', '生活', 'test', 'update'] //用户标签字符串数组
        },
        success: function(res) {
          //查看返回数据
          console.log(res); 
          console.log(res.result);
          console.log(res.result.stats);
          console.log(res.result.stats.updated);//更新的记录条数
      }
    })
  },

  activityUp: function() {
    wx.cloud.callFunction({
      name: 'user',
      data: {
        op: 'activityUp',
        activity: 0 //用户原来的活跃度
      },
      success: function(res) {
        //查看返回数据
        console.log(res); 
        console.log(res.result);
        console.log(res.result.stats);
        console.log(res.result.stats.updated);//更新的记录条数
      } 
    })
  }
})