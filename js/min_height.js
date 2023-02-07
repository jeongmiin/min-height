var contentsResizeTimer, contentsResizeSetTimer, contentsResize;

$(document).ready(function(){
  contentResize();
  
  $(window).resize(function(){
    contentResize();
  });
});

function contentResize(){
  clearInterval(contentsResizeTimer);
  clearTimeout(contentsResizeSetTimer);

  contentsResizeTimer = setInterval(function(){
    contentsResize = $('.wrap').height();

    if($('.header').length > 0) contentsResize -= $('.header').outerHeight();
    if($('.footer').length > 0) contentsResize -= $('.footer').outerHeight();

    if($('.contents_wrap').length > 0){
      $('.contents_wrap').css('min-height', contentsResize);
    }
  }, 100);

  contentsResizeSetTimer = setTimeout(function(){
    clearInterval(contentsResizeTimer);
  }, 1000);
}