
// pages/order/orderDetail/orderDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: 0,//0正在进行 1 完成
    infoList: [{
      iconImg: '',
      title: '餐盒',
      iconArr: '',
      value: '￥2',
      titleColor: '',
      valueColor: '#999999'
    }, {
        iconImg: '',
        title: '优惠券',
        iconArr: '',
        value: '-￥5.8',
        titleColor: '',
        valueColor: 'rgba(225,55,47,1)'
      }, {
        iconImg: '',
        title: '余额抵扣',
        iconArr: '',
        value: '-￥23',
        titleColor: '',
        valueColor: 'rgba(225,55,47,1)'
      }, {
        iconImg: '',
        title: '实付',
        iconArr: '',
        value: '-￥23',
        titleColor: '',
        valueColor: '',
        valueStyle: 'color:#333333;font-weight: 800;font-size:28rpx;'
      }]
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