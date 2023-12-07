// pages/content/content.js
const app = getApp();
const url = app.globalData.url;
const util = require('../utils/util.js');
Page({

  data: {
    isplay:false
    
  },
  //暂停
  audioPause(){
    this.data.IAC.pause();
    this.setData({
      isplay:false
    })
  },
//   //播放
//   audioPlay(){
//     this.data.IAC.play();
//     this.setData({
//       isplay:true
//     })
//   },
  //跳转到订座页面
  reserTap(){
    wx.switchTab({
      url: '../reser/reser',
    })
  },
 //取消收藏
 removeS(){
    let sto = wx.getStorageSync('storage');
    let stoName = this.data.food.id;
    delete sto[stoName];
    if(JSON.stringify(sto)=='{}'){
      wx.removeStorageSync('storage');
    }else{
      wx.setStorageSync('storage', sto);
    }
    this.setData({
      isStorage:false
    })
  },
  //收藏
  setS(){
    let sto = wx.getStorageSync('storage')||{};
    let stoName = this.data.food.id;
    sto[stoName]={
      id:this.data.food.id,
      title:this.data.food.title,
      pic:this.data.food.pic
    }
    //设置到storage中
    wx.setStorageSync('storage', sto);
    this.setData({
      isStorage:true
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options.id)
    let sto = wx.getStorageSync('storage');
    //判断对象中是否有指定的属性,返回布尔值
    let stoBool = sto.hasOwnProperty(options.id);
    this.setData({
      isStorage:stoBool
    })
    //根据id到服务器查询相应数据，绑定到页面
    let geturl = `${url}/db/content.php?where=id=${options.id}`
    util.getData2(geturl).then((res)=>{
    // console.log(res)
      res.pic= url+res.pic;
      this.setData({
        food:res
      })
      //动态设置导航栏标题
      wx.setNavigationBarTitle({
        title:res.title
      })


    })



    this.setData({      
      //创建音频
      "IAC":wx.createInnerAudioContext(),
      "IAC.src":`${url}/images/music.mp3`,
      "IAC.loop":true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    //页面卸载时停止音乐
    this.data.IAC.pause();
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})