App({

  globalData: {
    wxUserInfo: {},
  },

  onLaunch: async function () {

    var that = this

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }
    //云环境初始化
    wx.cloud.init({
      env: 'cloud1-5gjnayyifcd4e2a2'
    })

    let userInfo = await new Promise((resolve) => {
      
    });
    
    console.log(userInfo)



    console.log(this.globalData)

  }
})