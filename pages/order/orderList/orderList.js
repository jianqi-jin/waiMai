// pages/order/orderList/orderList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navTitleInfo: {
      currentNavIndex: 0,
      navList: [{
          id: 0,
          title: '全部',
          selected: false
        },
        {
          id: 1,
          title: '自取',
          selected: false
        },
        {
          id: 2,
          title: '外卖',
          selected: false
        },
        {
          id: 3,
          title: '店内点餐',
          selected: false
        }
      ],
    },
    orderList: [{
      id: '0',
      title: '道里爱建轻者轻食总店',
      info: '招牌帕尼尼沙拉餐套餐等 2件商品',
      status: '待支付',
      price: '16.9'
    }, {
      id: '0',
      title: '道里爱建轻者轻食总店',
      info: '招牌帕尼尼沙拉餐套餐等 2件商品',
      status: '已完成',
      price: '16.9'
    }]

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onNavChange(e) {
    console.log(e.detail)
    this.setData({
      ['navTitleInfo.currentNavIndex']: e.detail.id
    })
  },
  onAction(e) {
    if (e.detail.type == 'itemTap') {
      wx.navigateTo({
        url: '/pages/order/orderDetail/orderDetail'
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }

})