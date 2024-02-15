import circleList from "../../datas/circleList.js";

Page({
    
    /**
     * 页面的初始数据
     */
    data: {
        asideBar:["常见","抖音","轻抖","剪映","快手"],
        rightIndex:0,
    select:0,
    total :JSON.parse(JSON.stringify(circleList.circlecasts)),
    t:0,
    tn:0,
    circlecasts:[] as any,
    circleAll:[] as any,
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
          screenName: '文案'
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
    selectleft(e: { currentTarget: { dataset: { index: any; }; }; }){
        const {index} =e.currentTarget.dataset;
        console.log(index);
        this.setData({
          select:index,
          
          circlecasts:this.data.total,
            currentTab: 0, //按钮CSS变化
           // screenId: 0,
            //scrollTop: 0, //切换导航后，控制右侧滚动视图回到顶部
            
          
        })
      },



    /**
     * 导航切换
     */




    navbarTap: function(e:any) {
      
      
      this.data.circlecasts=JSON.parse(JSON.stringify(this.data.total));
      console.log(this.data.total);
      if(e.currentTarget.id!=0){
        var selectCast=this.data.circlecasts[this.data.select].filter((cast: any)=> cast.class ==e.currentTarget.id);
      }
      else{
        var selectCast=this.data.circlecasts[this.data.select];
      }
      
      console.log("qqq");
      console.log(this.data.screenId);
      console.log(selectCast);
      
      var selectCasts=this.data.circlecasts;
      //console.log(this.data.circlecasts);
      //selectCasts[this.data.tn]=this.data.t;
      //console.log("circleList");
      //console.log(circleList.circlecasts);

      //this.data.t=this.data.circlecasts[this.data.select];
      //this.data.tn=this.data.select;
      selectCasts[this.data.select]=selectCast;
      console.log("selectCast");
      console.log(selectCast);
      this.setData({
        circlecasts:selectCasts,
        currentTab: e.currentTarget.id, //按钮CSS变化
        screenId: e.currentTarget.dataset.screenid,
        scrollTop: 0, //切换导航后，控制右侧滚动视图回到顶部
        
      })
      
      //刷新右侧内容的数据
      //var screenId = this.data.screenId;
      
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var w=circleList.circlecasts;
        this.setData({
           circlecasts : w
        });
        console.log( circleList.circlecasts);
   
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
  });