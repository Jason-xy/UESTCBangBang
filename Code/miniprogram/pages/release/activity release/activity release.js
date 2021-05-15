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
    params:{},
   
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
      let params = {
        userID: app.globalData._ID,   
        name: e.detail.value.name,
        address: e.detail.value.address,
        contact: e.detail.value.contact,
        type: e.detail.value.type,
        startTime: e.detail.value.startTime,
        total:e.detail.value.total,
        remarks:e.detail.value.remarks,
        endTime: e.detail.value.endTime,
      
      }
      
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

    if (e.detail.value.name === "") {
      wx.showToast({
        title: '请输入活动名称',
        icon: "none",
        duration: 1000,
        mask: true,
      })
    }  else if (e.detail.value.startTime==="") {
      wx.showToast({
        title: '请输入时间',
        icon: "none",
        duration: 1000,
        mask: true,
      })
    } else if (e.detail.value.address === "") {
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
      const db = wx.cloud.database().collection('activity')//初始化数据库 宏定义一个db指代Room表   
      let that = this;    
      wx.cloud.callFunction({
        name: 'activity',
        data: {
          op: 'add', //指定操作名称
          name: e.detail.value.name, //活动名称
          address: e.detail.value.address, 
          contact: e.detail.value.contact, //联系方式
          total: e.detail.value.total, //活动所需总人数
          type: e.detail.value.type, //活动类型
          startTime: e.detail.value.startTime,//用字符串传递时间（如果前端需要使用Date对象，再用函数转化）
          remarks: e.detail.value.remarks, //备注
        },
        success:function(res) {
          wx.showToast({
                  title: '发布成功',
                  icon: "none",
                  duration: 1000,
                  mask: true,
                })
                          // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id       
                    console.log("发布成功", res)  
                //查看返回数据
                console.log(res);
                console.log(res.result);
                console.log(res.result._id); //活动的唯一标识，需要保管好，方便以后查找活动记录
        }
      })
    }
  },
 

 

})

