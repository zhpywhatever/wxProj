// components/broadItem/broadItem.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {
      item:{
              type:Object,
              value:{}
      }
    },
  
    /**
     * 组件的初始数据
     */
    data: {
  
    },
  
    /**
     * 组件的方法列表
     */
    methods: {
      handleBroadcast:function(){
          wx.navigateTo({
              url:`../broadcastDetail/broadcastDetail?broadcast=${this.data.item.name}&thumb=${this.data.item.thumb}&singer=${this.data.item.singer}`,
          })
      }
    }
  })