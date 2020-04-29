// pages/index/index.js

var validator = require('../../utils/validtor.js')
var { formatDate } = require('../../utils/datetime.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    editMode: false,
    todoList: [],
    todoCentent: ''
  },

  // 展示输入框
  handleShowAdd: function() {
    this.setData({
      editMode: true
    })
  },

  // 添加待办
  handleAdd: function(e) {
    var content = this.data.todoCentent
    if (validator.isBlank(content)) {
      wx.showToast({
        title: '请输入内容',
        icon: 'none'
      })
      return false
    }
    
    var createTime = new Date()
    var todo = {
      id: this.data.todoList.length + 1,
      content: content,
      createTime: createTime,
      formatCreateTime: formatDate(createTime),
      done: false
    }
    this.addTodo(todo)
  },

  // 切换完成状态
  handleToggleDone: function(e) {
    var item = e.currentTarget.dataset.item
    var pItem = this.data.todoList.find((o) => { return o.id === item.id })
    pItem.done = !pItem.done
    this.setData({
      todoList: this.data.todoList
    })
  },

  // 展示操作菜单
  handleShowMenu: function(e) {
    var id = e.currentTarget.dataset.item.id
    wx.showActionSheet({
      itemList: ['删除'],
      itemColor: '#f00',
      success: (e) => {
        if (e.tapIndex == 0) {
          this.removeTodo(id)
        } 
      }
    })
  },

  // 添加待办
  addTodo: function(todo) {
    this.data.todoList.push(todo)
    this.setData({
      editMode: false,
      todoCentent: '',
      todoList: this.data.todoList
    })
  },

  // 删除待办
  removeTodo: function(id) {
    var findIdx = -1;
    for(var i = 0, len = this.data.todoList.length; i < len; i++) {
      if (this.data.todoList[i].id === id) {
        findIdx = i;
        break;
      }
    }
    if (findIdx >= 0) {
      if (!this.data.todoList[findIdx].done) {
        wx.showToast({
          title: '请先完成待办再删除',
          icon: 'none'
        })
        return false
      }
      this.data.todoList.splice(findIdx, 1)
      this.setData({
        todoList: this.data.todoList
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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