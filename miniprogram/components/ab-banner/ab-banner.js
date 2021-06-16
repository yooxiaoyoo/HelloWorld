Component({
   properties: {
   // 这里定义父组件传值的属性
      banner: {
         type: 1,
         // 这里是组件内部数据
         images:[],
          // 是否显示面板指示点
          indicatorDots: true,
          // 滑动方向是否为纵向
          vertical: false,
          // 自动切换
          autoplay: true,
          // 采用衔接滑动
          circular: true,
          // 自动切换时间间隔2s
          interval: 2000,
          // 滑动动画时长0.5s
          duration: 500,
          // 前边距，可用于露出前一项的一小部分，接受 px 和 rpx 值
          previousMargin: 0,
          // 后边距，可用于露出后一项的一小部分，接受 px 和 rpx 值
          nextMargin: 0,
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
