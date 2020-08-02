function PST() {
    time.innerHTML = new Date()
}
setInterval(PST,1000);

$(window).scroll(function(){
    var sticky = $('.header'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 350) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
  });
  $(window).scroll(function(){
    var sticky = $('.side-bottom-button'),
        scroll = $(window).scrollTop();
  
    if (scroll >= 350) sticky.addClass('fixed-button');
    else sticky.removeClass('fixed-button');
  });