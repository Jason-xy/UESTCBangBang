
// miniprogram/pages/itemTest/itemTest.js
Page({

  //添加物品
  addItem: function() {
    wx.cloud.callFunction({
      name: 'item',
      data: {
        op: 'addItem', //指定操作类型
        name: '网球拍',
        address: '二教303',
        contact: "1224649136",
        type: "运动",
        price: "1.00元/天",
        image: "cloud://cloud1-5gjnayyifcd4e2a2.636c-cloud1-5gjnayyifcd4e2a2-1305715476/00d1d8a848b34c8ca29fb3e7c89f1cd0.jpg", //图片上传到云存储后的fileid
        startTime: "2021-05-02 00:00:00",
        endTime: "2021-05-08 19:00:00",
        remarks: "hello"
      },
      success: function(res) {
          //查看返回数据
          console.log(res);
          console.log(res.result);
          console.log(res.result._id); //物品的唯一标识，需要保管好，方便以后查找物品记录
      }
    })
  },

  //更新物品信息
  update: function() {
    wx.cloud.callFunction({
      name: 'item',
      data: {
        op: 'update',
        _id: "28ee4e3e60964ff416e7357d51f14573", //物品的_id,物品的唯一标识
        name: '网球拍',
        address: '二教303',
        contact: "1224649136",
        type: "运动",
        price: "1.00元/天",
        image: "cloud://cloud1-5gjnayyifcd4e2a2.636c-cloud1-5gjnayyifcd4e2a2-1305715476/00d1d8a848b34c8ca29fb3e7c89f1cd0.jpg", //图片上传到云存储后的fileid
        startTime: "2021-05-02 00:00:00",
        endTime: "2021-05-08 19:00:00",
        remarks: "update"
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

  //标记物品已出租
  rentItem: function() {
    wx.cloud.callFunction({
      name: 'item',
      data: {
        op: 'rentItem',
        _id: "28ee4e3e60964ff416e7357d51f14573", //物品的_id,物品的唯一标识
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

  //删除指定物品
  removeItem: function() {
    wx.cloud.callFunction({
      name: 'item',
      data: {
        op: 'removeItem',
        _id: "28ee4e3e60964ff416e7357d51f14573", //物品的_id,物品的唯一标识
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

  //查询所有物品信息
  queryAll: function() { //查看所有物品信息，这样可以在前端对所有物品进行分类等操作,而不使用后端提供的其他查询接口
    wx.cloud.callFunction({
      name: 'item',
      data: {
        op: 'queryAll',
      },
      success: function(res) {
          //查看返回数据
          console.log(res);
          console.log(res.result.data);
          console.log(res.result.data[0]);
      }
    })
  },

  //查询指定物品信息
  queryBy_id: function() {
    wx.cloud.callFunction({
      name: 'item',
      data: {
        op: 'queryBy_id',
        _id: "cbddf0af6096559f07202ae97a7fc26a",
      },
      success: function(res) {
          //查看返回数据
          console.log(res);
          console.log(res.result.data);
          console.log(res.result.data[0]);
      }
    })
  },

  //查询未出租物品
  queryUnRented: function() {
    wx.cloud.callFunction({
      name:'item',
      data: {
        op: 'queryUnRented'
      },
      success: function(res) {
        //查看返回数据
        console.log(res);
        console.log(res.result.data);
        console.log(res.result.data[0]);
      }
    })
  },

  //查询指定类型物品
  queryByType: function() {
    wx.cloud.callFunction({
      name: 'item',
      data: {
        op: 'queryByType',
        type: "运动"
      },
      success: function(res) {
        //查看返回数据
        console.log(res);
        console.log(res.result.data);
        console.log(res.result.data[0]); 
      }
    })
  },

  //查询用户的所有物品
  queryByMasterid: function() {
    wx.cloud.callFunction({
      name: 'item',
      data: {
        op: 'queryByMasterid',
        masterid: "oYsqu5benqiKEg1xbcdHjTpCMePI", //用户的openid
      },
      success: function(res) {
        //查看返回数据
        console.log(res);
        console.log(res.result.data);
        console.log(res.result.data[0]); 
      }
    })
  }
})