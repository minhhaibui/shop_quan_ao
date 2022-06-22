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
      autoplay: true,
      autoplaySpeed: 4000,
      Infinity: true,
      pauseOnDotsHover: true,
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

//open-close-Modal
const buyBtns = document.querySelectorAll(".btn_detail");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".btn-close-modal");

function openModal() {
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
}

modalClose.addEventListener("click", closeModal);

//click add modal
buyBtns.forEach(function (buyBtn, index) {
  buyBtn.addEventListener("click", function (e) {
    openModal();
    const buyItem = e.target;
    const productItem = buyItem.parentElement;
    const productImg = productItem.querySelector(".front img").src;
    const productTitle = productItem.querySelector(
      ".product_card-title"
    ).textContent;
    const productPrice = productItem.querySelector(
      ".product_card-price"
    ).textContent;
    addCart(productImg, productTitle, productPrice);
    deleteCard();
  });
});

function addCart(img, title, price) {
  const headerModal = document.querySelector(".header-modal a");
  headerModal.innerHTML = `${title}`;
  const addTr = document.createElement(`tr`);
  const trHtml = `
    <tr>
      <td>
        <th style="width: 55%; text-align: left;">
            <div class="img-product-modal">
                <img src="${img}" alt="" width="140px" height="140px">
                <div class="add-product">
                    <h3 class="header-product-add">
                        <a href="">${title}</a>
                    </h3>
                    <div class="size-product-item">
                        <p class="text-color-product">Size:</p>
                        <div class="size">M</div>
                        <div class="size">L</div>
                        <div class="size">XL</div>
                    </div>
                    <div class="color-product">
                      <p class="text-color-product">Màu sắc:</p>
                      <div class="color-item">
                          <img src="${img}" alt="" class="img-color">
                          <p class="sub-text">Pink</p>
                      </div>
  
                      <div class="color-item">
                          <img src="${img}" alt="" class="img-color">
                          <p class="sub-text">Blue</p>
                      </div>
                    </div>
                    <p class="product-close">
                      <i class="ti-close"></i>
                      Bỏ sản phẩm
                    </p>
                    <p class="product-recently">
                        <i class="ti-check"></i>
                        Sản phẩm vừa thêm!
                    </p>
                </div>
            </div>
        </th>
      </td>
  
      <td>
        <th style="width: 15%;"><span class="price">${price}
        </span>
        <i class="dong-icon">đ</i>
        </th>
      </td>
  
      <td>
        <th style="width: 15%;">
            <div class="btn-change-modal">
              <input type="number" class="quantity" min="1" max="10" value="1"></input>
            </div>
        </th>
      </td>
  
      <td>
        <th style="width: 15%;"><span class="intoMoney">390.000
        </span>
        <i class="dong-icon">đ</i>
        </th>
      </td>
    </tr>
    `;
  addTr.innerHTML = trHtml;
  const cartTable = document.querySelector("tbody");
  cartTable.append(addTr);
  totals();
  changeQuantity();
  productNumber();
  totalItem();
  btnContinue();
  sizeClick();
  colorClick();
}

// total
function totals() {
  const cartItem = document.querySelectorAll(".cardModal tr");
  var sum = 0;
  for (var i = 0; i < cartItem.length; i++) {
    var quantity = cartItem[i].querySelector(".quantity").value;
    var price = cartItem[i].querySelector(".price").innerHTML;
    total = Number(quantity) * Number(price) * 1000;
    sum = sum + total;
  }
  const sumMoney = document.querySelector(".sum-money .total-money");
  sumMoney.innerHTML = sum.toLocaleString("de-DE");
}

// totalItem
function totalItem() {
  const cartItem = document.querySelectorAll(".cardModal tr");
  var sum = 0;
  for (var i = 0; i < cartItem.length; i++) {
    var quantity = cartItem[i].querySelector(".quantity").value;
    var price = cartItem[i].querySelector(".price").innerHTML;
    total = Number(quantity) * Number(price) * 1000;
    const intoMoney = cartItem[i].querySelector(".intoMoney");
    intoMoney.innerHTML = total.toLocaleString();
  }
}

//delete card
function deleteCard() {
  const cartItem = document.querySelectorAll(".cardModal tr");
  for (var i = 0; i < cartItem.length; i++) {
    const deleteBtns = document.querySelectorAll("tr .product-close");
    deleteBtns[i].addEventListener("click", function (e) {
      const btn = e.target;
      const deleteE =
        btn.parentElement.parentElement.parentElement.parentElement;
      deleteE.remove();
      totals();
      productNumber();
    });
  }
}

//change quantity
function changeQuantity() {
  const cartItem = document.querySelectorAll(".cardModal tr");
  for (var i = 0; i < cartItem.length; i++) {
    const quantity1 = cartItem[i].querySelector(".btn-change-modal .quantity");

    quantity1.addEventListener("change", function () {
      totals();
      totalItem();
    });
  }
}

function productNumber() {
  const cartItem = document.querySelectorAll(".cardModal tr");
  const productNumber = document.querySelector(".quantity-cart span");
  productNumber.innerHTML = cartItem.length;
}

function btnContinue() {
  const btnContinue = document.querySelector(".btn-continue");
  const modal = document.querySelector(".modal");
  btnContinue.addEventListener("click", function () {
    closeModal();
  });
}

//size
function sizeClick() {
  const cartItem = document.querySelectorAll(".cardModal tr");
  for (var i = 0; i < cartItem.length; i++) {
    $(".size-product-item .size").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  }
}

//color
function colorClick() {
  const cartItem = document.querySelectorAll(".cardModal tr");
  for (var i = 0; i < cartItem.length; i++) {
    $(".color-product .color-item").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  }
}

//cartClick
function cartClick() {
  const cartClicks = document.querySelector(".cart-left");
  cartClicks.addEventListener("click", function () {
    openModal();
  });
}

cartClick();
