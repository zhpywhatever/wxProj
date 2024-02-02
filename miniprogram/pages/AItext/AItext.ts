// pages/AI/AI.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    asideBar:["收藏","短视频","小红书","公众号","朋友圈"],
    rightList:[
      [],
      [
        {
          text1:"钩子开头",
          text2:"短视频黄金三秒",
        },
        {
          text1:"金句",
          text2:"短视频金句模板",
        },
      ],
      [
        {
          text1:"小红书标题",
          text2:"醒目吸睛标题",
        },
        {
          text1:"优美封面",
          text2:"打造高级感",
        },
      ],
      [
        {
          text1:"公众号运营",
          text2:"关注量暴涨tips",
        },
        {
          text1:"推文排版",
          text2:"你也能制作优美的推文页面",
        },
      ],
      [
        {
          text1:"拼图九宫格",
          text2:"不再为照片太多而烦恼",
        },
        {
          text1:"精选文案",
          text2:"让你的文案脱颖而出",
        },
      ],
    ],
    rightIndex:1,
    select:1
  },

  selectleft(e: { currentTarget: { dataset: { index: any; }; }; }){
    const {index} =e.currentTarget.dataset;
    console.log(index);
    this.setData({
      select:index
    })
  },

  changefavor(){
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
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