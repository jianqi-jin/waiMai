// pages/good/orderDetail/orderDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    chooseShowFlag: false,
    tempNum: 0,
    posInfo: { //位置信息
      iconImg: '/res/icon/icon-address@3x.png',
      title: '台位：A区03号桌',
      iconArr: '/res/icon/icon-right-little@3x.png',
      value: '',
      titleColor: 'rgba(102,102,102,1)',
      titleStyle: "font-size:26rpx;",
      valueColor: ''
    },
    infoList: [{ //订单信息
      iconImg: '',
      title: '备注',
      iconArr: '/res/icon/icon-right-little@3x.png',
      value: '口味、爱好等备注',
      titleColor: '',
      titleStyle: "",
      valueColor: '',
      valueStyle: 'color:rgba(204,204,204,1);'
    }, {
      iconImg: '',
      title: '餐品数量',
      iconArr: '',
      value: 'x4',
      titleColor: '',
      titleStyle: "",
      valueColor: '',
      valueStyle: 'color:rgba(204,204,204,1);'
    }, {
      iconImg: '',
      title: '优惠券',
      iconArr: '',
      value: '3个可使用',
      titleColor: '',
      titleStyle: "",
      valueColor: '',
      valueStyle: 'color:rgba(225,55,47,1);'
    }, {
      iconImg: '',
      title: '余额抵扣',
      iconArr: '',
      value: '-￥32.3',
      titleColor: '',
      titleStyle: "",
      valueColor: '',
      valueStyle: 'color:rgba(225,55,47,1);'
    }],
    payInfo: {
      title: '微信支付',
      iconArr: '/res/icon/pj-ok@3x.png',
      iconArrStyle: 'width:40rpx;height:40rpx'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  onChooseBoxAction(e){
    let type = e.detail.type;
    if(type == 'close'){
      this.setData({
        chooseShowFlag: false
      })
      return 
    }
  },
  showChooseBox(){
    this.setData({
      chooseShowFlag: true
    })
  },
  onNumChange(e) {
    console.log(e)
    let type = e.detail.type;
    if (type == 'add') {
      this.setData({
        tempNum: this.data.tempNum + 1
      })
    } else {
      this.setData({
        tempNum: this.data.tempNum - 1
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