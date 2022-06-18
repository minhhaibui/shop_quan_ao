$(".sort_cate-list .sort_cate-item").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
  return false;
});

$(document).ready(function () {
  $(".section_product").hide();
  $("#section_product-1").fadeIn();
  $(".next_page-link").click(function () {
    $(".next_page-link").removeClass("active_next-page");
    $(this).addClass("active_next-page");

    let id_page = $(this).attr("href");
    $(".section_product").hide();
    $(id_page).fadeIn();
    // alert(id_page);
    // return false;
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
