// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    defaultShowIndex:{
      type: Number, // 类型（必填），接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 0
    },
    list: {
      type: Object, // 类型（必填），接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // showIndexActive: 0,
  },

  options:{
    // 用于iconfont在小程序中使用
    styleIsolation:'apply-shared'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    
    // 注册事件
    myTabbarEvent: function (e) {
      console.log("qq",e)
      var index = parseInt(e.currentTarget.dataset.index)
      // console.log(index)
      this.setData({ defaultShowIndex: index })
      // 注册点击事件传给父组件
      var fatherData = { showIndex: index}
      this.triggerEvent('myTabbarEvent', { activeIndex: fatherData })
      if (this.data.defaultShowIndex == 0) {
        wx.reLaunch({  //redirectTo只能叠加10次，reLaunch关闭之前页面，重新启动
          url: this.properties.list[0].url
        })
      } else if (this.data.defaultShowIndex == 1) {
        wx.reLaunch({
          url: this.properties.list[1].url
        })
      }
      console.log(this.data.defaultShowIndex)
    }
  }
})