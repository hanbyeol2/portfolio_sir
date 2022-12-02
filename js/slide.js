$(document).ready(function(){
    $('.slide_banner').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 2000
    });

    $('#nav_btn').click(function(){
        $(this).toggleClass('btn_x');
        $('#header').toggleClass('header_open');
        $('#main_depth').toggleClass('disB');
    });

    $('.best_slide').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
                  

    $('#open_btn').click(function(){
        $('#slide_pop').addClass('slide_up');
    });
    $('#close_pop').click(function(){
        $('#slide_pop').removeClass('slide_up');
    });

});