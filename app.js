// app.js
App({
    onError:function(msg){

    },
    globalData:{
        url:'http://192.168.0.102:81/'
    },
    //回调函数封装wxwx.request
   // geturl：请求地址()
    //callback：请求成功的回调函数
    //因为一部的请求机制，我们不能在其success()中直接返回需要的数据
    getData(geturl,callback){
        wx.request({
          url: 'geturl',
          success:(res)=>{
              callback(res.data)
          }
        })
    }
})
