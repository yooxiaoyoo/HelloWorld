// miniprogram/pages/page1-home/index.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultShowIndex:1 ,// 默认显示的索引（底部导航部分）
    list:[]
  },
  // 底部插件导航点击，切换样式
  popBaitiaoView: function (e) {
    // 接受子组件发送的数据  e
    // 设置数据
    _this.setData({
      defaultShowIndex: e.detail.activeIndex.showIndex,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this=this
    // 获取数据库list数据
    db.collection('list').get({
      success: function(res) {
        console.log(res)
        _this.setData({
          list:res.data
        })
      }
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