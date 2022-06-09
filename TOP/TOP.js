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
