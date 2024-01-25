Page({
 
    /**
     * 页面的初始数据
     */
    data: {
      currentTab: 0, //对应样式变化
      scrollTop: 0, //用作跳转后右侧视图回到顶部
      screenArray: [{
          screenId: 1,
          screenName: '全部'
        },
        {
          screenId: 2,
          screenName: '工具'
        },
        {
          screenId: 3,
          screenName: '任务'
        },
        {
          screenId: 4,
          screenName: '看不清'
        },
        {
          screenId: 5,
          screenName: '课堂'
        },
        {
          screenId: 6,
          screenName: '培训'
        }
      ], //左侧导航栏内容
      screenId: "1", //后台查询需要的字段
      childrenArray: {
        showImageUrl: '../../images/class.png',
        childrenScreenArray: [{
            screenName: '快手',
            childrenScreenArray: [{
              screenId: 1,
              showImageUrl: '../../images/AItext.png',
              screenName: '111'
            }, ]
          },
          {
            screenName: '抖音',
            childrenScreenArray: [{
              screenId: 1,
              showImageUrl: '../../images/AItext.png',
              screenName: '222'
            }, ]
          },
        ]
      }, //右侧内容
      childrenArrayTwo: {
        // showImageUrl: 'http://img3.imgtn.bdimg.com/it/u=1798233457,4143585420&fm=26&gp=0.jpg',
        childrenScreenArray: [{
          screenName: '快手',
          childrenScreenArray: [{
            screenId: 1,
            showImageUrl: '../../images/AItext.png',
            screenName: '222'
          },]
        },
        {
          screenName: '123',
          childrenScreenArray: [{
            screenId: 1,
            showImageUrl: '../../images/AItext.png',
            screenName: '2234'
          },]
        },
        ]
      } //右侧内容
    },
    /**
     * 导航切换
     */
    navbarTap: function(e) {
      var that = this;
      this.setData({
        currentTab: e.currentTarget.id, //按钮CSS变化
        screenId: e.currentTarget.dataset.screenid,
        scrollTop: 0, //切换导航后，控制右侧滚动视图回到顶部
      })
      //刷新右侧内容的数据
      var screenId = this.data.screenId;
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
   
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