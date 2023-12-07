// pages/user/user.js
const app=getApp();
const url=app.globalData.url;
const util=require('../utils/util.js')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isSto:true,
        hasUserInfo:true
    },
    
    stoTap(){
        this.setData({
            isSto:true
        })
    },
    reTap(){
        this.setData({
            isSto:false
        })
    },
    //获取用户信息
    getUserProfile(){
        wx.getUserProfile({
             // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
            //声明获取个人信息的用途，后续会展示在，请谨慎填写。
          desc: '展示用户信息',
          success:(res)=>{
              //console.log(res)
              this.setData({
                avatarUrl:res.userInfo.avatarUrl,
                nickName:res.userInfo.nickName,
                hasUserInfo:false
              })
          }
        })
    },
//删除收藏信息
delSto(event){
    let stoArr= this.data.stoList;
    //console.log(stoArr)
    //console.log(event)
    //删除数组中指定下标元素
    stoArr.splice(event.target.dataset.idx,1);
    this.setData({
      stoList:stoArr
    })
    //清除单个缓存
    let sto = wx.getStorageSync('storage');
    let stoName =event.target.dataset.id;
    delete sto[stoName];
    if(JSON.stringify(sto)=='{}'){
      wx.removeStorageSync('storage');
    }else{
      wx.setStorageSync('storage', sto);
    }
  
  },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
       
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示,实时更新
     */
    onShow() {
        let stoObj=wx.getStorageSync('storage');
        let key;
        let stoArr=[];
        for(key in stoObj){
            stoArr.unshift(stoObj[key]);//追加
        }
        this.setData({
           stoList:stoArr
        })
       
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