// miniprogram/pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movielist:[]
  },

  // 电影列表
  getMovielist:function(){
    wx.showLoading({
      title: '加载中',
    })
    let _this = this
    wx.cloud.callFunction({
      name:'movielist',
      data:{
        start:_this.data.movielist.length,
        count:10
      }
    }).then(res =>{
      console.log("ss",res)
      _this.setData({
        movielist: _this.data.movielist.concat(res.result.subject_collection_items)
      });
      wx.hideLoading()
    }).catch(err =>{
      console.log(err)
    })
  },
  // 评价
  gotoComment: function(event){
    console.log(event.target.dataset.movieid)
    wx.navigateTo({
      url:`../comment/comment?movieid=${event.target.dataset.movieid}`
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMovielist();
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
    this.getMovielist();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})