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
  const nav_icons = document.querySelectorAll(".nav_icon");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("nav_active");
    header_bottom.classList.toggle("header_active");
  });

  nav_icons.forEach(function (nav_icon) {
    nav_icon.addEventListener("click", function (e) {
      const nav_item = e.target;
      const nav_parent = nav_item.parentElement.parentElement;
      const dropdown = nav_parent.querySelector(".dropdown");
      dropdown.classList.toggle("dropdown_active");
    });
  });
};
navsile();
