const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
  
    return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
  }
  
  const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : `0${n}`
  }
  
    //Promise封装wx.request
    //geturl:请求地址
    const getData2 = (geturl)=>{
      return new Promise((resolve)=>{
        wx.request({
          url: geturl,
          success:(res)=>{
            resolve(res.data)
          }
        })
      })
    }
  
  module.exports = {
    formatTime,
    getData2
  }
  