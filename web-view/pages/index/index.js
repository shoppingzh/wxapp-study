//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    src: null
  },
  onLoad: function () {
    wx.login({
      complete: (res) => {
        this.setData({
          src: `http://192.168.1.110:4655?userCode=${res.code}`
        })
      },
    })
  }
})
