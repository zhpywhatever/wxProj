// pages/FuncArea1Detail/FuncArea1Detail.ts
Page({

  

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    cata:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {name}=options;
    this.setData({
      name:name
    })
    switch(this.data.name){
      case "图片转文字":
        this.setData({
          cata:1
        })
        break;
      case "数据监控":
        this.setData({
          cata:1
        })
        break;
      case "提词器":
        this.setData({
          cata:1
        })
        break;
      case "文案提取":
        this.setData({
          cata:1
        })
        break;
      case "智能配音":
        this.setData({
          cata:1
        })
        break;
      case "去水印":
        this.setData({
          cata:1
        })
        break;
      case "查权重":
        this.setData({
          cata:1
        })
        break;
      case "违禁词检测":
        this.setData({
          cata:2
        })
        break;
      case "账号估值":
        this.setData({
          cata:3
        })
        break;
      case "视频检测":
        this.setData({
          cata:1
        })
        break;
      case "公众号创作":
        this.setData({
          cata:1
        })
        break;
      case "小红书创作":
        this.setData({
          cata:1
        })
        break;
      case "短视频创作":
        this.setData({
          cata:1
        })
        break;
      case "小视频创作":
        this.setData({
          cata:1
        })
        break;
      
    }
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})