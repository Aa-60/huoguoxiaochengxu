// pages/list/list.js
const app=getApp();
const url=app.globalData.url;
const util=require('../utils/util.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    foodtap(event){
        let id=event.currentTarget.dataset.id;
        wx.navigateTo({
            url: `../content/content?id=${id}`
          })
          
        },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad:function(options) {
        //console.log(options)
        let p = this.data.play;
    let geturl=`${url}/db/list.php?where=classid=1&start=0&num=2`;
    util.getData2(geturl).then((res)=>{
        //console.log(res)
          let resArr=res;
          for(let i=0;i<resArr.length;i++){
            resArr[i].pic= url+ resArr[i].pic;
          }
          this.setData({
            food:resArr
          })
      }) 
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
     * 在对应的json文件里配置启用下拉刷新:"enablePullDownRefresh": true
     */
    onPullDownRefresh:function() {
        // console.log("下拉刷新")
        wx.showLoading({
          title: '正在刷新页面',
        })
        let p = this.data.play;
        let geturl=`${url}/db/list.php?where=classid=1&start=0&num=6`;
        util.getData2(geturl).then((res)=>{
            //console.log(res)
              let resArr=res;
              for(let i=0;i<resArr.length;i++){
                resArr[i].pic= url+ resArr[i].pic;
              }
              this.setData({
                food:resArr
              })
              wx.hideLoading()
          }) 
    },
    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {
      wx.showToast({
        title: '亲，到底啦',
      })
          let p = this.data.play;
          let geturl=`${url}/db/list.php?where=classid=1&start=0&num=6`;
          util.getData2(geturl).then((res)=>{
              //console.log(res)
                let resArr=res;
                for(let i=0;i<resArr.length;i++){
                  resArr[i].pic= url+ resArr[i].pic;
                }
                this.setData({
                  food:resArr
                })
               
    })
},

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})