Page({
  data: {
  currentIndex: 0,
  },
  
  onLoad: function (options) {
  },

  handleChange: function(e) {
  this.setData({
  current: e.detail.current
  })
  },

 })