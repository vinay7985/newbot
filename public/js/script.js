var audio = new Audio("images/woosh.mp3");
// bot open //
$(".floating-bot .mic .bot-icon").click(function(){
  $(".bot-popup").toggleClass("open");
  $(".floating-bot .mic").toggleClass("open");
});

$(".bot-popup .back-arrow").click(function(){
  $(".bot-popup").toggleClass("open");
  $(".floating-bot .mic").toggleClass("open");
  $(".floating-bot .mic").removeClass("active");
});



$('.bot-popup input').on('click',function(){
  var textwindow = $('.text-window');
  textwindow.addClass('active');
  setTimeout(function() {
      textwindow.addClass('open');
  }, 200);
  setTimeout(function() {
      textwindow.removeClass('open');
  }, 5000);
  setTimeout(function() {
      textwindow.removeClass('active');
  }, 5500);
});

$(".mic-icon").click(function(){
  $(".floating-bot .mic").toggleClass("active");
});

//slider

$(window).load(function() {
  $(".center").slick({
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    slidesToScroll: 2
  });
});

//toggle
$(".toggle").click(function(){
  $(".toggle-switch").toggleClass("on");
});

