// pages/yinliaoy/yinliao.js
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
    onLoad(options) {
        //封装
        let p = this.data.play;
        let geturl=`${url}/db/list.php?where=isgood=3&start=0&num=1`;
        util.getData2(geturl).then((res)=>{
            //console.log(res)
              let resArr=res;
              //对数据分组

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
     */
    onPullDownRefresh :function() {
        console.log("下拉刷新")
    },
    onPullDownRefresh:function() {
        // console.log("下拉刷新")
      wx.showNavigationBarLoading()
        let geturl=`${url}/db/list.php?where=isgood=3&start=0&num=3`;
        util.getData2(geturl).then((res)=>{
            //console.log(res)
              let resArr=res;
              for(let i=0;i<resArr.length;i++){
                resArr[i].pic= url+ resArr[i].pic;
              }
              this.setData({
                food:resArr
              })
              wx.hideNavigationBarLoading()
          }) 
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