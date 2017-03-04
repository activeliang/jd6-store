// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap/alert
//= require bootstrap/dropdown
//= require_tree .

// landing page 动画效果
// new WOW().init();


$(document).ready(function () {

    $(".player").mb_YTPlayer();

});



// 图片切换
$(document).on('mouseover', '.productDetail-left-imageList-item', function () {
  var src = $(this).find('img').attr('src') //从被鼠标选中的图片的src里面拿到图片链接
  $('.productDetail-left-bigImage').find('img').attr('src', src) //把图片链接设置到大图的src里面
})

// // 放大镜
// $('#preview').css('visibility', 'hidden')
// var evt = new Event(),
//     m = new Magnifier(evt);
// m.attach({
//     thumb: '#thumb',
//     large: $('.intro-preview-activeItem img').attr('src'),
//     largeWrapper: 'preview',
//     zoom: 2
// })
//
//
// $(function(){
//     $("#demo").magnify({
//         showEvent: 'click',
//         hideEvent: 'click',
//         lensWidth: 60,
//         lensHeight: 60,
//         preload: false,
//         stagePlacement: 'left',
//         loadingImage: 'pages/jquery/ajax-loader_gray.gif',
//         lensCss: {
//             backgroundColor: '#cc0000',
//             border: '0px',
//             opacity: 0.5
//         },
//         stageCss: { border: '4px solid #33cc33' }
//     });
// });
