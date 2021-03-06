var wxData = {
  imgUrl: 'imgUrl',
  title: 'title',
  desc: 'desc',
  link: window.location.href
};


/**
 * 获取分享所需的配置文件
 */
function getShareConfig(wxData) {
  $.ajax({
    type: "POST",
    url: 'url',
    data: { "url": wxData.link },
    dataType: 'jsonp',
    jsonp: 'callback',
    success: function (res) {
      var config_data = res.data;
      config_data.jsApiList = ['onMenuShareTimeline', 'onMenuShareAppMessage'];
      wx.config(config_data);
    },
    error: function () { }
  });
}

/**
 * 分享到朋友圈
 */
function wxShareTimeline(wxData) {
  wx.onMenuShareTimeline({
    title: wxData.title, // 分享标题
    link: wxData.link, // 分享链接
    imgUrl: wxData.imgUrl, // 分享图标
    // 用户确认分享后执行的回调函数
    success: function () { },
    // 用户取消分享后执行的回调函数
    cancel: function () { }
  });
}


/**
 * 分享到微信
 */
function wxShareAppMessage(wxData) {
  wx.onMenuShareAppMessage({
    title: wxData.title,
    desc: wxData.desc,
    link: wxData.link,
    imgUrl: wxData.imgUrl,
    trigger: function (res) { },
    success: function (res) { },
    cancel: function (res) { },
    fail: function (res) { }
  });
}



function init() {
  wx.ready(function () {
    wxShareTimeline(wxData);
    wxShareAppMessage(wxData);
  });
  getShareConfig(wxData);
}

export default init