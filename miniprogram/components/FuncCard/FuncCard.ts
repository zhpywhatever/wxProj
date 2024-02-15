// components/FuncCard/FuncCard.ts
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    cata:Number,
    name:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    content:"",  
    result: "",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    viewResults :function(){
        var that = this //创建一个名为that的变量来保存this当前的值 
        that.setData({
            result:"loading..."
        }); 
   wx.request({  
      url: 'https://ai-server.baolaai.com/api/v1/gen/copy_analysis/get_keywords_and_summary',  //接口
      method: 'POST',  
      header: {
        'content-type':'application/json',
        //'Content-Type':'application/json',
        //"X-AjaxPro-Method":"ShowList" //添加了该参数以后 请求就会被认定为raw格式数据
    },
      data: {  
        
        text:that.data.content  //这里是发送给服务器的参数（参数名：参数值）  
      },  

      
      success: function (res:any) {  
        
        console.log(res.data.data.keywords)  
        const str:string =res.data.data.keywords.join("\n\n");
        console.log(str);
        that.setData({
            result:str
        });
        
        console.log(that.data.result);
      }  
  }); 
    },
    viewResults4 :function(){
        var that = this //创建一个名为that的变量来保存this当前的值 
        
        that.setData({
            result:"loading..."
        }); 
   wx.request({  
      url: 'https://ai-server.baolaai.com/api/v1/gen/copy/begin',  //接口
      method: 'POST',  
      header: {
        'content-type':'application/json',
        //'Content-Type':'application/json',
        //"X-AjaxPro-Method":"ShowList" //添加了该参数以后 请求就会被认定为raw格式数据
    },
      data: {  
        
        topic_title:that.data.content , //这里是发送给服务器的参数（参数名：参数值）  
        count:3,
        text:"string"
      },  

      
      success: function (res:any) {  
        
        console.log(res.data.data)  
        const str:string =res.data.data.join("\n\n");
        console.log(str);
        that.setData({
            result:str
        });
        
        console.log(that.data.result);
      }  
      
  }); 
    },
  }
})