// pages/user/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '0428-111-2534',
    info: [{
        title: '优惠券',
        iconImg: '',
        iconArr: '',
        type: 'navigate',
        url: '/pages/user/coupon/coupon'
      },
      {
        title: '收货地址',
        iconImg: '',
        iconArr: '',
        type: 'navigate',
        url: '/pages/address/addressList/addressList'
      },
      {
        title: '余额明细',
        iconImg: '',
        iconArr: '',
        type: 'navigate',
        url: '/pages/user/moneyDetail/moneyDetail'
      },
      {
        title: '我的评价',
        iconImg: '',
        iconArr: '',
        type: 'navigate',
        url: '/pages/user/myComment/myComment'
      },
      {
        title: '客服中心',
        iconImg: '',
        iconArr: '',
        type: 'call'
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onInfoClick(e) {
    let item = e.currentTarget.dataset.item
    switch (item.type) {
      case 'call':
        {
          wx.makePhoneCall({
            phoneNumber: this.data.phone
          })
          break;
        }
      case 'navigate':
        {
          wx.navigateTo({
            url: item.url
          })
          break;
        }
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