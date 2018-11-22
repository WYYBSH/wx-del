// pages/product-management/product-management.js
Page({
  data: {
    currentTab: 0,
  },
  onLoad: function (options) {
  },
  swiperTab: function (e) {
    const _this = this
    _this.setData({
      currentTab: e.detail.current
    })
    //console.log(this.data.currentTab)
  },
  clickTab: function (e) {
    const _this = this
    if (this.currentTab === e.target.dataset.current) {
      return false
    } else {
      _this.setData({
        currentTab: e.target.dataset.current
      })
    }
  }
})