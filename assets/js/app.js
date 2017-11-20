var CDN_HOST = location.protocol == 'https:' ? 'https://o3hshi5d5.qnssl.com'  : 'http://billworks.qiniudn.com';

/**
 * e.x. filter = 'ui'
 * e.x. filter = 'ui,print'
 * @param filter
 */
function renderTemplate(tplId, data, length, filter) {
  data = data || [];

  var tpl = document.getElementById(tplId).innerHTML;
  var total_len = data.length;
  var tmp_arr = [], trim_len = length || 3;

  var fillter_handler = filter ? function(obj, property) {
    var filters = filter.split(','), f_len = filters.length;
    if (f_len) {
      for (var i = 0; i < f_len; i++) {
        if (obj[property] === filters[i])
          return true
      }
    }
    return false;
  } : function() {
    return true;
  };

  for (var i = 0; i < total_len && trim_len; i++) {
    if (fillter_handler(data[i], 'type')) {
      tmp_arr[tmp_arr.length] = data[i]
      trim_len--
    }
  }

  return juicer(tpl, {items: tmp_arr, cdn_host: CDN_HOST});
}

$(function() {
  var data = [
    {id:'17', type: 'ui', caption:'Brides of CA(preview)', updateTime: 'March 17,2014',
      locked: false, tags:['UI', 'Web'], thumb:'/upload/uiux/brides-of-ca-preview.png', url:'https://www.behance.net/gallery/Brides-of-California/15238379'},
    {id:'16', type: 'ui', caption:'A Dashboard', updateTime: 'Dec 14,2013',
      locked: false, tags:['UI', 'FP', 'Web'], thumb:'/upload/uiux/lfp-gui-new/thumb.jpg', url:'https://www.behance.net/gallery/Demo-of-DASHBOARD/13055939'},
    {id:'15', type: 'ui', caption:'Twitter Profile Fragment', updateTime: 'Dec 10,2013',
      locked: false, tags:['UI', 'Emma Watson', 'Web'], thumb:'/upload/uiux/twitter-profile-ui-thumb.png', url:'http://www.behance.net/gallery/Like-Twitter-Profile/12927731'},
    {id:'14', type: 'icon', caption:'Let\'s Chat', updateTime: 'Dec 10,2013',
      locked: false, tags:['UI', 'Emma Watson', 'Web'], thumb:'/upload/icon/ic_chat_demo-thumb.png', url:'http://www.behance.net/gallery/Chat-Icon/12924343'},

    {id:'13', type: 'photo', caption:'云南 高原海', updateTime: 'Dec 07,2013',
      locked: false, tags:[], thumb:'/upload/photo/004-2012-diqing-fairyland/thumb.jpg', url:'upload/photo/004-2012-diqing-fairyland/large.jpg'},
    {id:'12', type: 'photo', caption:'松赞林寺 僧人', updateTime: 'Dec 07,2013',
      locked: false, tags:[], thumb:'/upload/photo/003-2012-songzanlinsi-lama/thumb.jpg', url:'upload/photo/003-2012-songzanlinsi-lama/large.jpg'},
    {id:'11', type: 'photo', caption:'松赞林寺 大殿金饰', updateTime: 'Dec 07,2013',
      locked: false, tags:[], thumb:'/upload/photo/002-2012-songzanlinsi-totem/thumb.jpg', url:'upload/photo/002-2012-songzanlinsi-totem/large.jpg'},
    {id:'10', type: 'photo', caption:'云南丽江 民族舞者', updateTime: 'Dec 07,2013',
      locked: false, tags:[], thumb:'/upload/photo/001-2012-yunnan-dancer/thumb.jpg', url:'upload/photo/001-2012-yunnan-dancer/large.jpg'},

    {id:'9', type: 'icon', caption:'MobiBank APP', updateTime: 'Dec 07,2013',
      locked: true, tags:['Icon', 'Long Projection', 'FW'], thumb:'/upload/icon/long-shadow-test.png', url:'#'},
    {id:'8', type: 'icon', caption:'Contact Book', updateTime: 'Dec 07,2013',
      locked: false, tags:['UI', 'FW'], thumb:'/upload/icon/contact.png', url:'http://www.zcool.com.cn/work/ZMjkxMDY3Mg==.html'},

    {id:'7', type: 'ui', caption:'Account Detail', updateTime: 'Dec 07,2013',
      locked: false, tags:['UI', 'Android', 'MobiBank'], thumb:'/upload/uiux/mobi-bank/detail-htc.png', url:'http://www.behance.net/gallery/Account-detail-of-Mobi-Bank-APP/12831401'},
    {id:'6', type: 'ui', caption:'Switches Demo', updateTime: 'Dec 07,2013',
      locked: true, tags:['UI', 'iOS', 'FW'], thumb:'/upload/uiux/switches-demo.png', url:'#'},

    {id:'5', type: 'ux', caption:'UX example for MobiBank', updateTime: 'Dec 07,2013',
      locked: true, tags:['UX', 'Android', 'MobiBank'], thumb:'/upload/uiux/mobibank-ux.png', url:'#'},
    {id:'4', type: 'ui', caption:'Concept UI of MobiBank DRAFT-0.1', updateTime: 'Dec 07,2013',
      tags:['UI/UX', 'Android', 'MobiBank'], thumb:'/upload/uiux/mobi-bank/startup-0.1-htc.png', url:'http://www.behance.net/gallery/Mobi-Bank-App-for-Android/12788219'},
    {id:'3', type: 'ui', caption:'A Portal Site', updateTime: 'Dec 07,2013',
      locked: true, tags:['UI/UX', 'Web', 'Hao123'], thumb:'/upload/uiux/hao123-thumber.png', url:'#'},
    {id:'2', type: 'print', caption:'Printed Card', updateTime: 'Dec 07,2013',
      locked: true, tags:['Graph', 'Print', 'AI'], thumb:'/upload/print/lfp-card-project.png', url:'#'},
    {id:'1', type: 'ui', caption:'Login UI', updateTime: 'Dec 07,2013',
      locked: true, tags:['UI/UX', 'Web'], thumb:'/upload/uiux/lfp-web/cover.jpg', url:'#'}
  ];

  $('#containerUI').html(renderTemplate('tplUI', data, 9, 'ui,ux,print,icon'));
  $('#containerPHOTO').html(renderTemplate('tplPHOTO', data, 4, 'photo'));
});

// start foundation
$(document).foundation();
