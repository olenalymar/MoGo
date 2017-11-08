$(document).ready(function(){
  $('.carousel').slick({
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    infinite: true,
    speed: 700
  });
});


$('nav a').on('click', function(event) {
 event.preventDefault();
 var id = $(this).attr('href')
 $('html, body')
   .stop()
   .animate({
     scrollTop: $(id).offset().top
   });
});