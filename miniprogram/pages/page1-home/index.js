// miniprogram/pages/page1-home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    defaultShowIndex: {
      index:1,
      list:[
        {
          url:"/pages/index/index",//链接
          pic:"icon-WIFI",//图标
          tit:"活动详情"//导航
        },
        {
          url:"/pages/page1-home/index",//链接
          pic:"icon-poweroff",//图标
          tit:"活动详情"//导航
        },
        {
          url:"/pages/index/index",//链接
          pic:"icon-WIFI",//图标
          tit:"活动详情"//导航
        }
      ]
    } , // 默认显示的索引（底部导航部分）
  },
  // 底部插件导航点击，切换样式
  popBaitiaoView: function (e) {
    // 接受子组件发送的数据  e
    // 设置数据
    this.setData({
      defaultShowIndex: e.detail.activeIndex.showIndex,
    })
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