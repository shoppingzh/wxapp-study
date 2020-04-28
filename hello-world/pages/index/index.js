//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    active: false
  },
  // 事件处理
  sayHello() {
    wx.showModal({
      content: 'Hello, world!',
      showCancel: false
    })
  },
  onLoad: function () {
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
