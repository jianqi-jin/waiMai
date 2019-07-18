const serverUri = '';
const posti = '';
const header = {}
const request = (type, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: serverUri + posti + type + getApp().globalData.openid,
      data: data ? data : "",
      header,
      method: data ? "POST" : "GET",
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        resolve(res)
      },
      fail: function(res) {
        reject(res)
      }
    })
  })
}


const address = {
  getAddressList:() => {
    return request('waimai.get.addresslist');
  }
}


module.exports = {
  getAddressList:address.getAddressList,
  // login: login.login
}
