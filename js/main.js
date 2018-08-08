$(function () {
    'use strict';
    $("[data-toggle='tooltip']").tooltip();
    $('[data-toggle="popover"]').popover();
    var setConfig = {

        song : [
            {

                title : 'china',
                src : 'http://jq22com.qiniudn.com/jq22m1.mp3',
                cover : 'images/001.png'
            },
            {

                title : '笑脸',
                src : 'http://jq22.qiniudn.com/2_01.mp3',
                cover : 'images/002.png'
            }
        ],
        error : function(meg){

            console.log(meg);
        }
    };
    var audioFn = audioPlay(setConfig);

    if(audioFn){

        //开始加载音频,true为播放,false不播放
        audioFn.loadFile(1);
    }
})


function scroll(){
    console.log(document.body.scrollHeight);
    console.log(window.innerHeight)
    console.log(document.documentElement.scrollTop);
    let scrollHeight=document.body.scrollHeight;
    let innerHeight=window.innerHeight;
    let scrollTop=document.documentElement.scrollTop;
    let progressNum=scrollTop/(scrollHeight-innerHeight)*100;
    let progressProject=document.getElementById("progress-bottom");
    console.log(progressProject);
    progressProject.style.width=progressNum+'%';
}
var scrollFunc = function (e) {  
    e = e || window.event;  
    if (e.wheelDelta) {  //第一步：先判断浏览器IE，谷歌滑轮事件               
        if (e.wheelDelta > 0) { //当滑轮向上滚动时  
            // console.log("滑轮向上滚动");  
            // console.log(e);
        }  
        if (e.wheelDelta < 0) { //当滑轮向下滚动时  
            // console.log("滑轮向下滚动");  
            // console.log(e)
        }  
    } else if (e.detail) {  //Firefox滑轮事件  
        if (e.detail> 0) { //当滑轮向上滚动时  
            // console.log("滑轮向上滚动");  
        }  
        if (e.detail< 0) { //当滑轮向下滚动时  
            //console.log("滑轮向下滚动");  
        }  
    }  
}
//给页面绑定滑轮滚动事件  
if (document.addEventListener) {//firefox  
    document.addEventListener('DOMMouseScroll', scrollFunc, false);  
}  


//滚动滑轮触发scrollFunc方法  //ie 谷歌  
window.onmousewheel = document.onmousewheel = scrollFunc;

// swiper
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
      el: '.swiper-pagination',
    },
  });


