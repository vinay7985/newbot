//Kushagra

var audio = new Audio("images/woosh.mp3");
// bot open //
// $( ".floating-bot .mic .bot-icon" ).on( "click", function() {
//   alert('hello');
// });
$(document).on("click",".sync-icon",function() {
  removeModules("#tour");
  removeModules("#player");
});

$(document).on("click",".player .player-control .play-btn",function() {
  $(".play-btn").toggleClass("open");
  
});
//$(document).on("click","#test-element",function() {
//$(".floating-bot .mic .bot-icon").on('click',function(){
  $(document).on("click",".floating-bot .mic .bot-icon",function() {
  $(".bot-popup").toggleClass("open");
  $(".floating-bot .mic").toggleClass("open");
});

//$(".bot-popup .back-arrow").on('click',function(){
  $(document).on("click",".bot-popup .back-arrow",function() {
  $(".bot-popup").toggleClass("open");
  $(".floating-bot .mic").toggleClass("open");
  $(".floating-bot .mic").removeClass("active");
});



//$('.bot-popup input').on('click',function(){
  $(document).on("click",".bot-popup input",function() {
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

//$(".mic-icon").click(function(){
  $(document).on("click",".mic-icon",function() {
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
