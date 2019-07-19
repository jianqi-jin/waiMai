
// components/navBottom/navBottom.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    showFlage: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapFun: (e) => {
      let item = e.currentTarget.dataset.item;
      console.log(item.url)
      if (item.type == 'qrCode') {
        wx.scanCode({
          onlyFromCamera: true,
          scanType: ['QR_CODE'],
          success: function(res) {
            console.log(res)
          },
          fail: function(res) {},
          complete: function(res) {},
        })
        return
      }
      if (item.url) {
        if (item.type == 'navigate') {
          wx.navigateTo({
            url: item.url
          })
        } else {
          wx.redirectTo({
            url: item.url
          })
        }
      }
    },
    toggleNavBar() {
      console.log('toggle')
      this.setData({
        showFlage: !this.data.showFlage
      })
    }
  },
  ready() {
    this.setData({
      navList: getApp().globalData.navBottomList
    })
  }
})