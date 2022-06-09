// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// const backTopBtn = $('.backtop');

//Backtop
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop()) {
      $(".backtop").fadeIn();
    } else {
      $(".backtop").fadeOut();
    }
  });
  $(".backtop").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  $(".section_product").slick({
    lazyLoad: "ondemand",
    slidesToShow: 4,
    infinite: true,
    slidesToScroll: 1,
    prevArrow: `<i type='button' class="ti-arrow-circle-left icon_card-left icon_next slick-prev pull-left"></i>`,
    nextArrow: `<i type='button' class="ti-arrow-circle-right icon_card-right icon_next slick-next pull-right"></i>`,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          lazyLoad: "ondemand",
          slidesToShow: 3,
          infinite: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
          slidesToShow: 2,
          infinite: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          lazyLoad: "ondemand",
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
