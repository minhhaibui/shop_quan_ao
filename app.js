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

  $(document).ready(function () {
    $(".section_product").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      prevArrow: `<button type='button' class='slick-prev slick-arrow'> <i class="ti-angle-left icon-next"></i></button>`,
      nextArrow: `<button type='button' class='slick-next slick-arrow'> <i class="ti-angle-right icon-next"></i></button>`,

      responsive: [
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    });
  });
});

const navsile = () => {
  const toggle = document.querySelector("#toggle");
  const header_bottom = document.querySelector(".header_bottom");
  const nav = document.querySelector(".nav");
  const dropdown_top = document.querySelector("#dropdown-top");
  const dropdown_bottom = document.querySelector("#dropdown-bottom");
  const dropdown_accessory = document.querySelector("#dropdown-accessory");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("nav_active");
    header_bottom.classList.toggle("header_active");
  });
  const dropdown_toggle_top = document.querySelector("#icon_top");
  dropdown_toggle_top.addEventListener("click", () => {
    dropdown_top.classList.toggle("dropdown_active");
  });

  const dropdown_toggle_bottom = document.querySelector("#icon_bottom");
  dropdown_toggle_bottom.addEventListener("click", () => {
    dropdown_bottom.classList.toggle("dropdown_active");
  });
  const dropdown_toggle_accessory = document.querySelector("#icon_accessory");
  dropdown_toggle_accessory.addEventListener("click", () => {
    dropdown_accessory.classList.toggle("dropdown_active");
  });
};
navsile();
