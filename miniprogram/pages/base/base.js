// pages/base/base.js
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images:[] //图片放置的数组
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

  // 云函数调用-加法运算
  sum:function(){
    wx.cloud.callFunction({
      name: "sum",
      data: {
        a:1,
        b:2 
      }
    }).then(res =>{
      console.log("云函数sum调用",res.result.sum)
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

  // 云存储-上传图片
  upload: function(){
    wx.chooseImage({
      count: 1,   //可选张数
      sizeType: ['original', 'compressed'],  //所选图片尺寸（原图，缩略图）
      sourceType: ['album', 'camera'],   //图片来源（相册，相机）
      success (res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        wx.cloud.uploadFile({ //将本地资源上传至云存储空间
          cloudPath: new Date().getTime()+ ".png",  //云存储文件名（实时日期+png确保上传名称不会重复）
          filePath: tempFilePaths[0], // 小程序临时文件路径
          success: res => {
            console.log(res.fileID)  //图片路径
            // 图片路径存在数据库images里
            db.collection('images').add({
              data:{
                fileID:res.fileID
              }
            }).then(res =>{
              console.log("上传图片",res)
            }).catch(err =>{
              console.log("上传图片",err)
            })
          },
          fail: err => {
            console.log("上传图片",err)
          }
        })
      }
    })
  },
  // 文件展示
  getFile: function(){
    wx.cloud.callFunction({  //云函数获取openid
      name:"openid"
    }).then(res =>{
      // 通过openid查找images里数据
      db.collection("images").where({
        _openid:res.result.openid
      }).get().then(img =>{
        console.log("文件展示",img)
        this.setData({  //将获取的所有内容导入images数组里
          images:img.data
        })
      })
    })
  },
  // 文件下载
  downloadFile: function(event){
    console.log("前端传来的数据",event)
    wx.cloud.downloadFile({   //文件下载，fileID为页面录入的id
      fileID: event.target.dataset.fileid,
    }).then(res => {
      console.log("文件下载",res.tempFilePath)
      // 保存图片到手机相册
      wx.saveImageToPhotosAlbum({
        filePath:res.tempFilePath,
        success(res) {
          wx.showToast({  //成功下载后弹出提示框
            title: '保存成功',
          })
        }
      })
    }).catch(error => {
      console.log("文件下载",error)
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