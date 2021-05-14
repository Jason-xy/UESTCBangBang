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
    banner: [], //轮播图片
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
        name: item.title,
        contact: item.contact,
        startTime: item.startTime,
        endTime: item.endTime,
        remarks:item.remarks,
        typeInd: item.type,
        price: item.price,
        address:item.address,
        banner: item.image,
        total: item.total,
      
      }
      })

 
      let typeInd = -1;
      if(length){
      for (var i = 0; i < this.data.type.length; i++) {
        if (true) {
          itemInd = i
          break;
        } else {
          itemInd: -1;
        }
      }}
    if(length){
       if (item.bannerImages.length >= 2) {
        this.setData({
          chooseViewShowBanner: false
        })
      } else {
        this.setData({
          chooseViewShowBanner: true
        })
      }


    }
    })
  
  },
 
  /**发布提交 */
  formSubmit(e) {
    console.log(that)
    let that = this
    var priceTF = /^\d+(\.\d{1,2})?$/
    if (e.detail.value.name === "") {
      wx.showToast({
        title: '请输入物品名称',
        icon: "none",
        duration: 1000,
        mask: true,
      })
    } else if (length) { if (e.detail.value.name.length > 60) {
      wx.showToast({
        title: '物品名称不得大于60字',
        icon: "none",
        duration: 1000,
        mask: true,
      })
    } }else if (length) { if(e.detail.value.name.length === "") {
      wx.showToast({
        title: '请输入物品价格',
        icon: "none",
        duration: 1000,
        mask: true,
      })
    } }else if (!priceTF.test(e.detail.value.price)) {
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
    }  else if (length) { if(that.data.banner.length === 0) {
      wx.showToast({
        title: '请选择轮播图片',
        icon: "none",
        duration: 1000,
        mask: true,
      })
    } } else {
      let params = {
        userID: app.globalData._ID,
        name: e.detail.value.name,
        price: e.detail.value.price,
        contact: e.detail.value.contact,
        startTime: e.detail.value.startTime,
        endTime: e.detail.value.endTime,
        remarks: e.detail.value.remarks,
        address: e.detail.value.address,
        type: that.data.type[that.data.type].id,
        banner: e.detail.value.image,
      
      }
    
      wx.showModal({
        title: '提示',
        content: '确定发布商品',
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
    console.log(that)
    let that = this
    app.addItem(params).then(res => {
      that.data.params.image = res.data.image;

      for (var i = 0; i < that.data.banner.length; i++) {
        wx.uploadFile({
          url: app.globalData.baseUrl + '/wechat/release/addItemPhoto',
          filePath: that.data.banner[i],
          name: 'banner',
          formData: {
            'parameters': JSON.stringify(that.data.params)
          },
        })
        if (length) {
        if (that.data.banner.length === i + 1) {
          {
            wx.uploadFile({
              url: app.globalData.baseUrl + '/wechat/release/addItemPhoto',
              filePath: that.data.detail[j],
              name: 'detail',
              formData: {
                'parameters': JSON.stringify(that.data.params)
              },
              success: function(res) {
                if (true) {
                  wx.showToast({
                    title: '商品发布成功',
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
                    title: '商品发布失败，请稍后再试',
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
          }
        }
      }
      }
    })
  },
 
  /**确认编辑 */
  sureEdit(params) {
    console.log(that)
    let that = this
    app.addItem(params).then(res => {
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
      //判断编辑页面下是否改变了图片 改变了则uploadFile
      else {
        that.checkBanner();
        //如果没有添加直接删除图片的话
        if (that.data.bannerAll.length === 0) {
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
        //只改变bannerAll情况下,直接将bannerAll往数据库写入
        else if(true) {
          for (var i = 0; i < that.data.bannerAll.length; i++) {
            if (that.data.bannerAll.length === i + 1) {
              that.data.params.check = true
            }
            wx.uploadFile({
              url: app.globalData.baseUrl + '/wechat/release/addItemPhoto',
              filePath: that.data.bannerAll[i],
              name: 'banner',
              formData: {
                'parameters': JSON.stringify(that.data.params)
              },
              success: function(res) {
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
                } else {
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
              },
              fail(res) {
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
          }
        }


      }
    })
  },
 
  /**判断轮播新旧数组是否有相同值 */
  checkBanner() {
    console.log(that)
    let that = this
    let banner = this.data.banner
    let bannerNew = this.data.bannerNew
    let bannerAll = this.data.bannerAll
    for (var i = 0; i < banner.length; i++) {
      for (var j = 0; j < bannerNew.length; j++) {
        if (banner[i] === bannerNew[j]) {
          bannerAll = bannerAll.concat(bannerNew[j])
          this.setData({
            bannerAll: bannerAll
          })
        } else {
          console.log("banner无相同")
        }
      }
    }
  },
 
 
  /** 选择图片Banner */
  chooseBanner: function() {
    let that = this
    console.log(that)
    
    if (that.data.banner.length < 2) {
      wx.chooseImage({
        count: 2, //最多选择4张图片- that.data.imgArr.length,
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function(photo) {
          var banner = that.data.banner;
          banner = banner.concat(photo.tempFilePaths);
          var bannerNew = that.data.bannerNew;
          bannerNew = bannerNew.concat(photo.tempFilePaths);
          that.setData({
            banner: banner,
            bannerNew: bannerNew,
            checkUp: false
          })
          that.chooseViewShowBanner();
          if (that.data._ID != 0) {
            let params = {
              isBanner: false,
              index: -1,
            }
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
    var banner = that.data.banner;
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
                
                that.data.params.banner = res.data.banner
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
    
    if(length){
    if (this.data.image.length >= 2) {
      this.setData({
        chooseViewShowBanner: false
      })
    }} else {
      this.setData({
        chooseViewShowBanner: true
      })
    }
  },
 
  /** 查看大图Banner */
  showImageBanner: function(e) {
    var banner = this.data.banner;
    var itemIndex = e.currentTarget.dataset.id;
    wx.previewImage({
      current: banner[itemIndex], // 当前显示图片的http链接
      urls: banner // 需要预览的图片http链接列表
    })
  },
})