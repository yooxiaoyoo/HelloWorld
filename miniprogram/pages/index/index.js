// miniprogram/pages/index/index.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    openid:"",
    defaultShowIndex: 0 , // 默认显示的索引（底部导航部分）
  },
  tabChange(e) {
    console.log('tab change', e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this=this
    wx.cloud.callFunction({
      name: 'openid',
    }).then(res => {
      _this.setData({
        openid:res.result.openid
      })
      db.collection("user").field({openid:true})
      .get({
        success:res=>{
          if(res.data.length >= 1){
            wx.showToast({title: '欢迎回来',icon:'none'})
          }else{
            db.collection("user").add({ 
              data:{
                _openid:_this.openid,
              },
            })
          }
        }
      })
    })
    // 页面停留3s后跳转(定时器功能)
    // setTimeout(function () {
    //   wx.reLaunch({
    //     url: '/pages/page1-home/index',
    //   })
    // }, 3000);
    //获得dialog组件
    this.dialog = this.selectComponent("#dialog");
  },

  // 弹窗组件部分
  showDialog(){
    this.dialog.showDialog();
  },
  //取消事件
  _cancelEvent(){
    console.log('你点击了取消');
    this.dialog.hideDialog();
  },
  //确认事件
  _confirmEvent(){
    console.log('你点击了确定');
    this.dialog.hideDialog();
  },
  // 弹窗组件部分结束

  // 底部插件导航点击，切换样式
  popBaitiaoView: function (e) {
    // 接受子组件发送的数据  e
    // 设置数据
    this.setData({
      defaultShowIndex: e.detail.activeIndex.showIndex,
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