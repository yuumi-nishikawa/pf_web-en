$(function(){
function fadeAnime(){
    $('.fadeUpTrigger').each(function(){ 
      var elemPos = $(this).offset().top-50;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll >= elemPos - windowHeight){
      $(this).addClass('fadeIn');
      }else{
      $(this).removeClass('fadeIn');
      }
      });
  }
  
    $(window).scroll(function (){
      fadeAnime();
    });
  
    $(window).on('load', function(){
      fadeAnime();
    });

});