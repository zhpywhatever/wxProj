// pages/AI/AI.ts
var app = getApp<IAppOption>()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    asideBar:["收藏","短视频","小红书","公众号","朋友圈"],
    itemList:[
        {
            index:0,
            favor:false,
          text1:"钩子开头",
          text2:"短视频黄金三秒",
        },
        
        {
            index:1,
            favor:false,
          text1:"金句",
          text2:"短视频金句模板",
        },
      
        {
            index:2,
            favor:false,
          text1:"小红书标题",
          text2:"醒目吸睛标题",
        },
        {
            index:3,
            favor:false,
          text1:"优美封面",
          text2:"打造高级感",
        },
      
        {
            index:4,
            favor:false,
          text1:"公众号运营",
          text2:"关注量暴涨tips",
        },
        {
            index:5,
            favor:false,
          text1:"推文排版",
          text2:"你也能制作优美的推文页面",
        },
      
        {
            index:6,
            favor:false,
          text1:"拼图九宫格",
          text2:"不再为照片太多而烦恼",
        },
        {
            index:7,
            favor:false,
          text1:"精选文案",
          text2:"让你的文案脱颖而出",
        },
    
    ],
    rightList:[
      [
        
      ],
      [
        {index:0,
            
        },
        
        {
            index:1,
            
        },
      ],
      [
        {index:2,
            
        },
        {
            index:3,
            
        },
      ],
      [
        {
            index:4,
            
        },
        {
            index:5,
            
        },
      ],
      [
        {index:6,

            
        },
        {
            index:7,
            
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

  changefavor(e:any){
    const index = e.currentTarget.dataset.obj.index;
  
    console.log(index);
    const obj=this.data.itemList;
    
    obj[index].favor=!obj[index].favor;
    const list=this.data.rightList;
    list[0]=this.data.itemList.filter(item => item.favor=== true)
    this.setData({
        itemList:obj,
        rightList:list,
    })
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
    if(app.globalData.select!=0){
        this.setData({
            select:Number(app.globalData.select),
          });
          app.globalData.select=0;
      }
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