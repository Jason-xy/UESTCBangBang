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
    ColorList: app.globalData.ColorList
  },

  attached() {
    console.log("success")
    let that = this;
    wx.showLoading({
      title: '数据加载中',
      mask: true,
    })
    let i = 0;
    numDH();
    function numDH() {
      if (i < 20) {
        setTimeout(function () {
          that.setData({
            starCount: i,
            FansTotal: i,
            visitTotal: i
          })
          i++
          numDH();
        }, 20)
      } else {
        that.setData({
          starCount: that.coutNum(30),
          FansTotal: that.coutNum(8),
          visitTotal: that.coutNum(240)
        })
      }
    }
    wx.hideLoading()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   let that = this;
  //   setTimeout(function() {
  //     that.loading = true
  //   }, 500)

  //   wx.getSetting({
  //     success (res){
  //       if (res.authSetting['scope.userInfo']) {
  //         // 已经授权，可以直接调用 getUserInfo 获取头像昵称
  //         wx.getUserInfo({
  //           success: function(res) {
  //             console.log(res.userInfo)
  //           }
  //         })
  //       }
  //     }
  //   })
  // },

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

    console.log(globalData)
    console.log(globalData.wxUserInfo)
    // wx.cloud.database().collection('user').get()
    // .then(res => {
    //   console.log('请求成功', res)
    // })
    // .catch(err => {
    //   console.log('请求失败', err)
    // })

    // wx.cloud.callFunction({
    //   name: 'user',
    //   data: {
    //     op: 'queryAll' //指定操作类型 查询所有
    //   },
    //   success: function(res) {
    //     //查看返回数据
    //     console.log('调用云函数', res); 
    //     console.log(res.result);
    //     console.log(res.result.data);
    //     console.log(res.result.data[0]);
    //   }
    // })

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
  SetColor(e) {
    this.setData({
      color: e.currentTarget.dataset.color,
      modalName: null
    })
  },
  SetActive(e) {
    this.setData({
      active: e.detail.value
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