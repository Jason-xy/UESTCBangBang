// pages/activity release/activity release.js

var app = getApp();
Page({
 /**
   * 页面的初始数据
   */
  data: {
    name: "",
    address: "",
    contact: "",
    startTime: "",
    total:"",
    remarks:"",
    type: [{
      name: "篮球",
      id: 0
    }, {
      name: "网球",
      id: 1
    },{
      name: "乒乓球",
      id: 2
    },{
      name: "排球",
      id: 3
    },{
      name: "羽毛球",
      id: 4
    },{
      name: "足球",
      id: 5 
    }],


    typeInd: 0, //类型
    
   
    dis: false,
  },

  /**
   * 获取标题
   */
  nameBlur(e) {
    this.setData({
      name: e.detail.value
    })
  },
  /**
   * 获取活动时间
   */
  startTimeBlur(e) {
    this.setData({
      startTime: e.detail.value
    })
  },
  /**
   * 获取活动地址
   */
  addressBlur(e) {
    this.setData({
      address: e.detail.value
    })
  },
  /**
   * 获取联系方式
   */
  contactBlur(e) {
    this.setData({
      contact: e.detail.value
    })
  },
  /** 
   * 活动时间
   */
  endTime(e) {
    this.setData({
      endTime: e.detail.value
    })
  },
  /**
   * 活动类型
   */
  type(e) {
    this.setData({
      typeInd: e.detail.value
    })
  },
  /**
   * 获取备注
   */
  remarksBlur(e) {
    this.setData({
      remarks: e.detail.value
    })
  },
    /**
   * 获取总人数
   */
  totalBlur(e) {
    this.setData({
      total: e.detail.value
    })
  },
 
  /**获取活动备注 */
  getActivityDetail() {
    let params = {
      userID: app.globalData._ID,
    
    }
  
    app.getReleaseActivityDetail(data).then(res => {
      const db = wx.cloud.database()
      const activityCollection= db.collection("activity")
      activityCollection.add({
      data: {
        name: activity.name,
        address: activity.address,
        contact: activity.contact,
        type: activity.type,
        startTime: activity.startTime,
        total:activity.total,
        remarks:activity.remarks,
        endTime: activity.endTime,
      
      }
      })
      let activity = res.data.activityDetail[0]
      if (true) {
        this.setData({
          detailInd: 1
        })
      } else {
        this.setData({
          detailInd: 0
        })
      }

    })
  },
 
  /**发布提交 */
  formSubmit(e) {
    let that = this
    var timeTF = /^\d+(\.\d{1,2})?$/
    if (e.detail.value.name === "") {
      wx.showToast({
        title: '请输入活动名称',
        icon: "none",
        duration: 1000,
        mask: true,
      })
    } else if (e.detail.value.name.length > 60) {
      wx.showToast({
        title: '活动名称不得大于60字',
        icon: "none",
        duration: 1000,
        mask: true,
      })
    } else if (e.detail.value.name.length === "") {
      wx.showToast({
        title: '请输入活动价格',
        icon: "none",
        duration: 1000,
        mask: true,
      })
      }
    // } else if (!timeTF.test(e.detail.value.startTime)) {
    //   wx.showToast({
    //     title: '活动时间确保精确',
    //     icon: "none",
    //     duration: 1000,
    //     mask: true,
    //   })
    // } 
        else if (e.detail.value.address === "") {
      wx.showToast({
        title: '请输入活动地址',
        icon: "none",
        duration: 1000,
        mask: true,
      })
    } else if (e.detail.value.contact === "") {
      wx.showToast({
        title: '请输入联系方式',
        icon: "none",
        duration: 1000,
        mask: true,
      })
    }else if (that.data.type === -1) {
      wx.showToast({
        title: '请选择活动类型',
        icon: "none",
        duration: 1000,
        mask: true,
      })
    } else {
      let params = {
        userID: app.globalData._ID,
        
        name: e.detail.value.name,
        startTime: e.detail.value.startTime,
        endTime: e.detail.value.endTime,
        total: e.detail.value.total,
        address: e.detail.value.address,
        contact: e.detail.value.contact,
        type: that.data.type,
      
      }
      wx.showModal({
        title: '提示',
        content: '确定发布活动',
        success(res) {
          if (res.confirm) {
            if (that.data._ID != 0) {
              that.sureEdit(params); //编辑
            } else {
              that.sureRelease(params); //发布
            }
            that.setData({
              dis: true,
            })
          }
        }
      })
    }
  },
 
  /**确认发布 */
  sureRelease(params) {
    let that = this
    app.addActivity(params).then(res => {
            wx.uploadFile({
              
              success: function(res) {
                if (e.detail.value.name.length >=1) {
                  wx.showToast({
                    title: '活动发布成功',
                    icon: "none",
                    duration: 2000,
                    mask: true,
                    success() {
                      setTimeout(function() {
                        wx.navigateBack({
                          delta: 0,
                        })
                      }, 1000);
                    }
                  })
                } else {
                  wx.showToast({
                    title: '活动发布失败，请稍后再试',
                    icon: "none",
                    duration: 2000,
                    mask: true,
                    success() {
                      setTimeout(function() {
                        wx.navigateBack({
                          delta: 0,
                        })
                      }, 1000);
                    }
                  })
                }
              },
              fail: function(res) {
                if (JSON.parse(res.errMsg) === "request:fail socket time out timeout:6000") {
                  wx.showToast({
                    title: '请求超时，请稍后再试！',
                    icon: "none",
                    duration: 2000,
                    mask: true,
                    success() {
                      setTimeout(function() {
                        wx.navigateBack({
                          delta: 0,
                        })
                      }, 1000);
                    }
                  })
                }
              }
            })
        
      
    })
  },
 

  /**确认编辑 */
  sureEdit(params) {
    let that = this
    app.addActivity(params).then(res => {
      that.data.params.activityID = res.data._ID;
      //判断编辑页面下是否只改变了文字数据，选择图片后checkUp为false
      if (true) {
        wx.showToast({
          title: '商品修改成功',
          icon: "none",
          duration: 2000,
          mask: true,
          success() {
            setTimeout(function() {
              wx.navigateBack({
                delta: 0,
              })
            }, 1000);
          }
        })
      }
      else {
        wx.showToast({
          title: '商品修改失败',
          icon: "none",
          duration: 2000,
          mask: true,
          success() {
            setTimeout(function() {
              wx.navigateBack({
                delta: 0,
              })
            }, 1000);
          }
        })
      }
  
     fail(res) ;{
      if (JSON.parse(res.errMsg) === "request:fail socket time out timeout:6000") {
        wx.showToast({
          title: '请求超时，请稍后再试！',
          icon: "none",
          duration: 2000,
          mask: true,
          success() {
            setTimeout(function() {
              wx.navigateBack({
                delta: 0,
              })
            }, 1000);
          }
        })
      }
    }
  }
    )
}
})