// pages/base/base.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  //数据库增删改查 
  // 增
  insert: function(){
    db.collection("user0707").add({
      data:{
        name: "悠小呦",
        age: "18"
      }
    }).then(res => {
      console.log("增",res)
    }).catch(err => {
      console.log("增",err)
    })
  },
  //删
  delete: function(){
    db.collection("user0707")
    .doc("28ee4e3e60e545c42874e6ad6f5f1d5b")
    .remove()
    .then(res => {
      console.log("删",res)
    }).catch(err => {
      console.log("删",err)
    })
  },
  // 改
  update: function(){
    db.collection("user0707")
    .doc("79550af260e5470924e015be60c3a8ab")
    .update({
      data:{
        name:"闫小蕊"
      }
    }).then(res =>{
      console.log("改",res)
    }).catch(err =>{
      console.log("改",err)
    })
  },
  // 查
  search: function(){
    db.collection("user0707").where({
      name:"悠小呦"
    }).get().then(res =>{
      console.log("查",res)
    }).catch(err=>{
      console.log("查",err)
    })
  },

  // 云函数调用
  sum:function(){
    wx.cloud.callFunction({
      name: "sum",
      data: {
        a:1,
        b:2 
      }
    }).then(res =>{
      console.log("云函数sum调用",res)
    }).catch(err =>{
      console.log("云函数sum调用",err)
    })
  },
  // 云函数获取openid
  getOpenid: function(){
    wx.cloud.callFunction({
      name:"openid"
    }).then(res =>{
      console.log("获取openid",res.result.openid)
    }).catch(err =>{
      console.log("获取openid",err)
    })
  },
  // 云函数批量删除
  batchdelete: function(){
    wx.cloud.callFunction({
      name:"batchdelete"
    }).then(res =>{
      console.log("云函数批量删除",res)
    }).catch(err =>{
      console.log("云函数批量删除",err)
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