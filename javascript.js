window.onscroll = function () {
    
    var autoVideo = document.getElementById("myVideo");
    
    if (autoVideo.getBoundingClientRect().top > 500 ||
       autoVideo.getBoundingClientRect().bottom < 350)
        autoVideo.pause();
    
    else
        
        autoVideo.play();
}

  $(window).scroll(function() {
     var wintop = $(window).scrollTop(), docheight =

     $(document).height(), winheight = $(window).height();
     var scrolled = (wintop/(docheight-winheight))*100;

     $('.scroll-line').css('width', (scrolled + '%'));
});