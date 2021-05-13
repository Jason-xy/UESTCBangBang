// pages/personal/personal.js
const app = getApp();
const globalData = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  options: {
    addGlobalClass: true,
  },
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    ColorList: app.globalData.ColorList,
    randomColor: Math.floor(Math.random()*5),
    inputValue:''
  },

  showModal(e) {//弹出模糊框
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },

  bindValue(e){//获取输入框内容
    let that = this
    that.setData({
      inputValue: e.detail.value
    })
  },

  hideModalCancel(e) {//取消添加tag
    this.setData({
      modalName: null
    })
  },

  hideModalConfirm(e) {//确认添加tag
    let that = this
    this.setData({
      modalName: null
    })

    wx.cloud.callFunction({
      name: "user",
      data: {
        op:'addTag', //指定操作类型
        tag: that.data.inputValue,
      },
      success: function(res) {
         //查看返回数据
        // console.log(res);
        // console.log(res.result);
        wx.cloud.callFunction({
          name: 'user',
          data: {
            op: 'queryCurrent' //指定操作类型 查询所有
          },
          success: function(res) {
            //查看返回数据
            that.setData({
              activity: res.result.data[0].activity,
              tags: res.result.data[0].tags
            })
            // console.log('调用云函数', res); 
            // console.log(res.result);
            // console.log(res.result.data);
            // console.log(res.result.data[0]);
            // console.log(that);
          }
        })
      }
    })
  },

  delTag(e){//删除tag
    console.log(e)
    let that = this
    wx.showModal({
      title: '提示',
      content: '是否删除这个标签',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.cloud.callFunction({
            name: "user",
            data: {
              op:'removeTag', //指定操作类型
              tag: e.currentTarget.dataset.txt,
            },
            success: function(res) {
               //查看返回数据
              // console.log(res);
              // console.log(res.result);
              wx.cloud.callFunction({
                name: 'user',
                data: {
                  op: 'queryCurrent' //指定操作类型 查询所有
                },
                success: function(res) {
                  //查看返回数据
                  that.setData({
                    activity: res.result.data[0].activity,
                    tags: res.result.data[0].tags
                  })
                  // console.log('调用云函数', res); 
                  // console.log(res.result);
                  // console.log(res.result.data);
                  // console.log(res.result.data[0]);
                  // console.log(that);
                }
              })
            }
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad() {
    let that = this;
    setTimeout(function() {
      that.setData({
        loading: true
      })
    }, 500)

    //获取用户信息
    wx.showModal({
      title: '温馨提示',
      content: '正在请求您的个人信息',
      success(res) {
        if (res.confirm) {
          wx.getUserProfile({
            desc: "获取你的昵称、头像、地区及性别",
            success: res => {
              console.log(res)
              that.setData({
                avatar: res.userInfo.avatarUrl,
                username: res.userInfo.nickName
              })
            },
            fail: res => {
               //拒绝授权
              that.showErrorModal('您拒绝了请求');
              return;
            }
          })
        } else if (res.cancel) {
          //拒绝授权 showErrorModal是自定义的提示
          that.showErrorModal('您拒绝了请求');
          return;
        }
      }
    })

    wx.cloud.callFunction({
      name: 'user',
      data: {
        op: 'queryCurrent' //指定操作类型 查询当前用户
      },
      success: function(res) {
        console.log(res)
        if(res.result.data.length == 0)//如果用户不存在则创建用户
        {
          wx.cloud.callFunction({
            name: "user",
            data: {
              op:'add', //指定操作类型
              image: '', //上传图片后获取的fileid
              phone: '' , //电话号码字符串
              activity: 0,
              tags:['运动', '生活'], //用户标签字符串数组
            },
            success: function(res) {
               //查看返回数据
              console.log(res);
              console.log(res.result);
              console.log(res.result._id);
              wx.cloud.callFunction({
                name: 'user',
                data: {
                  op: 'queryCurrent' //指定操作类型 查询当前用户
                },
                success: function(res) {
                  //查看返回数据
                  that.setData({
                    activity: res.result.data[0].activity,
                    tags: res.result.data[0].tags
                  })
                  // console.log('调用云函数', res); 
                  // console.log(res.result);
                  // console.log(res.result.data);
                  // console.log(res.result.data[0]);
                  // console.log(that);
                },
              })
            }
          })
        }
        //查看返回数据
        that.setData({
          activity: res.result.data[0].activity,
          tags: res.result.data[0].tags
        })
        // console.log('调用云函数', res); 
        // console.log(res.result);
        // console.log(res.result.data);
        // console.log(res.result.data[0]);
        // console.log(that);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})