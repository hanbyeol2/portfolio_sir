$(document).ready(function(){
    var _h = $("#util_header .event_roll ul li").height();
    var dir = "-=";
    var slideUp = setInterval(slide,2500);
    function slide(){
        $("#util_header .event_roll ul").animate({"marginTop":dir+_h}, 1000, function(){
            $("li:first-child",this).appendTo($(this));
            $(this).css("margin-top","0");
        });
    }
    $('.slide_banner').slick({
        infinite: true,
        speed: 300,
        fade: true,
        autoplay: true,
        cssEase: 'linear'
      });
});