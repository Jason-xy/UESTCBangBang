// pages/item release/item release.js

var app = getApp();
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    name: "",
    contact: "",
    startTime: "",
    endTime: "",
    image:"",
    remarks: "",
    address: "",
    price: "",
    type: [{
      name: "运动",
      id: 0
    }, {
      name: "书",
      id: 1
    },{
      name: "拼车",
      id: 2
    }],
    length: !undefined,
    typeInd: 0, //类型
    image: [], //轮播图片
    bannerNew: [],
    bannerAll: [],
    checkUp: true, //判断从编辑页面进来是否需要上传图片

    chooseViewShowBanner: true,
    params: {
    
      contentFile: "",
      bannerFile: "",
      check: false,
    },
    dis: false,
  },

  /**
   * 获取名字
   */
  nameBlur(e) {
    this.setData({
      name: e.detail.value
    })
  },
  /**
   * 获取物品价格
   */
  priceBlur(e) {
    this.setData({
      price: e.detail.value
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
   * 获取交易时间
   */
  startTimeBlur(e) {
    this.setData({
      startTime: e.detail.value
    })
  },
    /**
   * 获取交易时间
   */
  endTimeBlur(e) {
    this.setData({
      endTime: e.detail.value
    })
  },
      /**
   * 获取交易地址
   */
  addressBlur(e) {
    this.setData({
      address: e.detail.value
    })
  },
      /**
   * 获取交易时间
   */
  remarksBlur(e) {
    this.setData({
      remarks: e.detail.value
    })
  },
  /** 
   * 商品价格
   */
  price(e) {
    this.setData({
      price: e.detail.value
    })
  },
  /**
   * 商品类型
   */
  type(e) {
    this.setData({
      typeInd: e.detail.value
    })
  },

  type(e) {
    this.setData({
      image: e.detail.value
    })
  },




  /**获取商品详情 */
  getItemDetail() {
    let params = {
      userID: app.globalData._ID,
      
    }
    app.getReleaseItemDetail(params).then(res => {
      console.log(that)
      let item = res.data.itemDetail[0]
      const db = wx.cloud.database()
      const activityCollection= db.collection("item")
      activityCollection.add({
      data: {
                userID: app.globalData._ID,
                name: e.detail.value.name,
                price: e.detail.value.price,
                contact: e.detail.value.contact,
                startTime: e.detail.value.startTime,
                endTime: e.detail.value.endTime,
                remarks: e.detail.value.remarks,
                address: e.detail.value.address,
                type: e.detail.value.type,
                image: e.detail.value.image[e.detail.value.image], 
      
      }
      })

 


    })
  
  },
 
  /**发布提交 */
  formSubmit(e) {
   
    let that = this
    console.log(that)
    var priceTF = /^\d+(\.\d{1,2})?$/
    if (e.detail.value.name === "") {
      wx.showToast({
        title: '请输入物品名称',
        icon: "none",
        duration: 1000,
        mask: true,
      })
    }else if (!priceTF.test(e.detail.value.price)) {
      wx.showToast({
        title: '物品价格精确到两位',
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
    } else if (e.detail.value.startTime === "") {
      wx.showToast({
        title: '请输入可租时间',
        icon: "none",
        duration: 1000,
        mask: true,
      })
    } else if (that.data.type === -1) {
      wx.showToast({
        title: '请选择物品类型',
        icon: "none",
        duration: 1000,
        mask: true,
      })
    }  else {
      const db = wx.cloud.database().collection('item')//初始化数据库 宏定义一个db指代Room表   
        let that = this;    
         db.add({       //db之前宏定义的 在这里指数据库中的item表； add指 插入
              data: {          // data 字段表示需新增的 JSON 数据       
                userID: app.globalData._ID,
                name: e.detail.value.name,
                price: e.detail.value.price,
                contact: e.detail.value.contact,
                startTime: e.detail.value.startTime,
                endTime: e.detail.value.endTime,
                remarks: e.detail.value.remarks,
                address: e.detail.value.address,
                type: e.detail.value.type,
                image: e.detail.value.image,    //将我们获取到的数据的value值给item表
                 },          
          success: function (res) {    
            wx.showToast({
              title: '发布成功',
              icon: "none",
              duration: 1000,
              mask: true,
            }) 
                      // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id       
                console.log("发布成功", res)   
                wx.switchTab({
                  url: '/pages/release/release'
                })     
                 }         
                       })        
          
        

 
    

      
    }
  },


 
  
 
  /**判断轮播新旧数组是否有相同值 */
  checkBanner() {
    console.log(that)
    let that = this
    let banner = this.data.banner
    let bannerNew = this.data.bannerNew
    let bannerAll = this.data.bannerAll

  },
 
   /** 选择图片Banner */
   chooseBanner: function() {
    let that = this
    console.log(that)
    var image =this.data.image
    
    if (true) {
      wx.chooseImage({
        count: 2, //最多选择4张图片- that.data.imge.length,
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
       
        success: function(image) {
          var banner = that.data.image;
          banner = banner.concat(image.tempFilePaths);
          var bannerNew = that.data.bannerNew;
          bannerNew = bannerNew.concat(image.tempFilePaths);
          that.setData({
            banner: image,
            bannerNew: image,
            checkUp: false
          })
          that.chooseViewShowBanner();
          if (that.data._ID != 0) {
            let params = {
              isBanner: false,
              index: -1,
            }
            wx.uploadFile({ 
              url: getApp().data.image + '/weixin/wx_upload.do', 
              filePath: filep, 
              name: 'image', 
              formData: { 
              'user': 'test'
              }, 
              success: function (res) { 
              console.log(res) 
              console.log(res.data) 
              var sss= JSON.parse(res.data) 
              var image = sss.image; 
              //输出图片地址 
              console.log(image); 
              that.setData({ 
              "image": image
              }) 
              
              //do something 
              }, fail: function (err) { 
              console.log(err) 
              } 
              }); 
            app.deleteItemImage(params).then(res => {
              if ( res.data.banner !== "") {
                
                that.data.params.banner = res.data.banner
              }
            })
          }
        }
      })
 
    } else {
      wx.showToast({
        title: '限制选择2个文件',
        icon: 'none',
        duration: 1000
      })
    }
  },

 
  /** 删除图片Banner */
  deleteImvBanner: function(e) {
    let that = this
    var banner = that.data.image;
    var itemIndex = e.currentTarget.dataset.id;
    if (true) {
      wx.showModal({
        title: '提示',
        content: '删除不可恢复，请谨慎操作',
        success(res) {
          if (res.confirm) {
            banner.splice(itemIndex, 1);
            that.setData({
              banner: banner,
              checkUp: false
            })
            that.chooseViewShowBanner();
            let params = {
              itemID: that.data._ID,
              isBanner: true,
              index: itemIndex,
            }
            app.deleteItemImage(params).then(res => {
              if ( res.data.banner !== "") {
                
                that.data.params.banner = res.data.image
              }
            })
          }
        }
      })
    } else {
      banner.splice(itemIndex, 1);
      that.setData({
        banner: image,
        checkUp: false
      })
      that.chooseViewShowBanner();
    }
  },
 
 
  /** 是否隐藏图片选择Banner*/
  chooseViewShowBanner() {
    let that = this
    console.log(that)
    
    
    if (true) {
      this.setData({
        chooseViewShowBanner: false
      })
    }else {
      this.setData({
        chooseViewShowBanner: true
      })
    }
  },
 
  /** 查看大图Banner */
  showImageBanner: function(e) {
    var banner = this.data.image;
    var itemIndex = e.currentTarget.dataset.id;
    wx.previewImage({
      current: banner[itemIndex], // 当前显示图片的http链接
      urls: banner // 需要预览的图片http链接列表
    })
  },
})