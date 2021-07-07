Component({
   properties: {
   // 这里定义父组件传值的属性
      banner: {
         type: 1
      },
   },
   methods:{
      btn1(e){//当轮播btn被点击时，跳转19课堂小程序
         wx.navigateToMiniProgram({
            appId: 'wxca86930ec3e80717', // 要跳转的小程序的appid
            path: e.currentTarget.id, // 跳转的目标页面
            extarData: {
              open: 'auth'
            },
            success(res) {
              // 打开成功  
            }
         }) 
      },
   },
})
