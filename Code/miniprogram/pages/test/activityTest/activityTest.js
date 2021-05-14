// miniprogram/pages/activityTest/activityTest.js
Page({

  //添加新活动
  add: function() {
    wx.cloud.callFunction({
      name: 'activity',
      data: {
        op: 'add', //指定操作名称
        name: "hello", //活动名称
        address: "篮球场6号", 
        contact: "1224649136", //联系方式
        total: 2, //活动所需总人数
        type: '篮球', //活动类型
        startTime: "2021-12-08 12:00:00", //用字符串传递时间（如果前端需要使用Date对象，再用函数转化）
        remarks: "hello UESTC BangBang！", //备注
      },
      success:function(res) {
              //查看返回数据
              console.log(res);
              console.log(res.result);
              console.log(res.result._id); //活动的唯一标识，需要保管好，方便以后查找活动记录
      }
    })
  },

  //更新活动信息
  update: function() {
    wx.cloud.callFunction({
      name: 'activity',
      data: {
        op: 'update',
        _id: "cbddf0af6094b08b06dd20167af67c38", //活动的_id,一个活动的唯一标识
        name: "newhello", //活动名称
        address: "篮球场6号", 
        contact: "1224649136", //联系方式
        total: 2, //活动所需总人数
        type: '篮球', //活动类型
        startTime: "2021-12-08 12:00:00", //用字符串传递时间（如果前端需要使用Date对象，再用函数转化）
        remarks: "hello UESTC BangBang！", //备注
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

    //添加活动参与人员
    addMember: function() {
      wx.cloud.callFunction({
        name: 'activity',
        data: {
          op: 'addMember',
          _id: "cbddf0af6094b08b06dd20167af67c38", //活动的_id,一个活动的唯一标识
          newMember: "openid of the newMember", //活动申请者的openid
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

  //查询当前用户发布的所有活动
  queryByMasterid: function() { 
    wx.cloud.callFunction({
      name: 'activity',
      data: {
        op: 'queryByMasterid',
        masterid: "oYsqu5benqiKEg1xbcdHjTpCMePI", //当前用户的openid
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

  //查询当前活动（根据_id）
  queryBy_id: function() {
    wx.cloud.callFunction({
      name: 'activity',
      data: {
        op: 'queryBy_id',
        _id: "28ee4e3e60947d49168310f51563945f", //添加活动时返回的_id要在前端保存好，这里才能唯一确定一个活动
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

    //查询未结束活动
    queryUnfinish: function() {
      wx.cloud.callFunction({
        name: 'activity',
        data: {
          op: 'queryUnfinish'
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

    //查询某一类型活动
    queryByType: function() {
      wx.cloud.callFunction({
        name: 'activity',
        data: {
          op: 'queryByType',
          type: "篮球"
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

          //完成活动
    finishActivity: function() {
      wx.cloud.callFunction({
        name: 'activity',
        data: {
          op: 'finishActivity',
          _id: "cbddf0af6094b08b06dd20167af67c38"
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

  //删除活动
  removeActivity: function() {
    wx.cloud.callFunction({
      name: 'activity',
      data: {
        op: 'removeActivity',
        _id: "cbddf0af6094b08b06dd20167af67c38"
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

  //查询所有活动信息
  queryAll: function() { //查看所有活动信息，这样可以在前端对所有活动进行分类等操作,而不使用后端提供的其他查询接口
    wx.cloud.callFunction({
      name: 'activity',
      data: {
        op: 'queryAll',
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

  //查询指定用户参与的所有活动
  queryByMember: function() { 
    wx.cloud.callFunction({
      name: 'activity',
      data: {
        op: 'queryByMember',
        memberId: "oYsqu5benqiKEg1xbcdHjTpCMePI" //用户的openid
      },
      success: function(res) {
          //查看返回数据
          console.log(res);
          console.log(res.result);
          console.log(res.result.data);
          console.log(res.result.data[0]);
      }
    })
  }

})