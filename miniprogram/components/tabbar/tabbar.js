// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    defaultShowIndex: { // 属性名-- 父组件传过来的数据
      type: Number, // 类型（必填），接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: 0 // 属性初始值（可选），如果未指定则会根据类型选择一个
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // showIndexActive: 0,
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
        wx.redirectTo({
          url: '/pages/index/index'
        })
      } else if (this.data.defaultShowIndex == 1) {
        wx.redirectTo({
          url: '/pages/page1-home/index'
        })
      }
    }
  }
})