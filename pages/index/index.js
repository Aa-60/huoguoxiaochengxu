// pages/user/user.js
const app=getApp();
const url=app.globalData.url;
const util=require('../utils/util.js')

Page({
    /**
     * 页面的初始数据
     */
    data: {
    navbox:[
        {pic:'/images/icon/rou.png',title:'荤菜',url:"../list/list"},
        {pic:'/images/icon/青菜.png',title:'素菜',url:"../sucai/sucai"}, 
        {pic:'/images/icon/饮料.png',title:'特色小吃',url:"../yinliao/yinliao"}
    ], 
},
swipertap(event){    
    let id = event.target.dataset.id;
   wx.navigateTo({
    url: `../content/content?id=${id}`
   })
   
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
        wx.setStorageSync('key', "海底捞一捞")
    let  menu=wx.getMenuButtonBoundingClientRect();
    this.setData({
        menutop:menu.top
    })
    let p = this.data.play;
    let geturl=`${url}/db/list.php?where=isgood>0&start=0&num=10`;
    util.getData2(geturl).then((res)=>{
        //console.log(res)
          let resArr=res;
          //对数据分组
          let swiper=[];
          let food=[];
          for(let i=0;i<resArr.length;i++){
            resArr[i].pic= url+ resArr[i].pic;
            if(resArr[i].isgood==1){
              swiper.push(resArr[i])
            }if(resArr[i].isgood==2){
              food.push(resArr[i])
            }
          }
          this.setData({
            swiper,
            food
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