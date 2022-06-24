$(".sort_cate-list .sort_cate-item").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

const tilte = [];
for (var i = 0; i < product.length; i++) {
  tilte.push(product[i].tilte);
}

//Sắp xếp từ A-z
function sortAz() {
  tilte.sort();

  for (var i = 0; i < tilte.length; i++) {
    for (var j = 0; j < product.length; j++) {
      if (tilte[i] == product[j].tilte) {
        $(`.product-sort${i + 1}`).replaceWith(`
                <div class="product-sort${i + 1}">
                    <div id="img${i + 1}" class="section_product-card">
                        <div class="flip-card">
                             <div class="flip-card-inner">
                                <div class="front hot">
                                    <img
                                        src="${product[j].img}"
                                        alt=""
                                    />
                                </div>
                            <div class="back hot">
                                <img
                                    src="${product[j].img_hover}"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div class="product_card-content">
                        <div class="product_card-series">${
                          product[j].series
                        }</div>
                        <div class="product_card-title">${
                          product[j].tilte
                        }</div>
                        <div class="product_card-price">${product[j].price}
                            <i class="dong-icon">đ</i>
                        </div>
                    </div>
                    <a href="#" class="btn_detail">Chi tiết</a>
                </div>      
                `);
      }
    }
  }
}

$(".sortA-z").click(function () {
  if ($(".sortA-z").hasClass("active")) {
    sortAz();
  }
});

// Sắp xếp từ Z-A
function sortZa() {
  tilte.sort((a, b) => {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  });
  for (var i = 0; i < tilte.length; i++) {
    for (var j = 0; j < product.length; j++) {
      if (tilte[i] == product[j].tilte) {
        $(`.product-sort${i + 1}`).replaceWith(`
                <div class="product-sort${i + 1}">
                    <div id="img${i + 1}" class="section_product-card">
                        <div class="flip-card">
                             <div class="flip-card-inner">
                                <div class="front hot">
                                    <img
                                        src="${product[j].img}"
                                        alt=""
                                    />
                                </div>
                            <div class="back hot">
                                <img
                                    src="${product[j].img_hover}"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div class="product_card-content">
                        <div class="product_card-series">${
                          product[j].series
                        }</div>
                        <div class="product_card-title">${
                          product[j].tilte
                        }</div>
                        <div class="product_card-price">${product[j].price}
                            <i class="dong-icon">đ</i>
                        </div>
                    </div>
                    <a href="#" class="btn_detail">Chi tiết</a>
                </div>      
                `);
      }
    }
  }
}
$(".sortZ-a").click(function () {
  if ($(".sortZ-a").hasClass("active")) {
    sortZa();
  }
});

//Sắp xếp theo hàng mới
function sortNewArrive() {
  for (var i = 0; i < product.length; i++) {
    if (product[i].quality == "new Arrive") {
      $(`.product-sort${i + 1}`).replaceWith(`
                <div class="product-sort${i + 1}">
                    <div id="img${i + 1}" class="section_product-card">
                        <div class="flip-card">
                             <div class="flip-card-inner">
                                <div class="front hot">
                                    <img
                                        src="${product[i].img}"
                                        alt=""
                                    />
                                </div>
                            <div class="back hot">
                                <img
                                    src="${product[i].img_hover}"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div class="product_card-content">
                        <div class="product_card-series">${
                          product[i].series
                        }</div>
                        <div class="product_card-title">${
                          product[i].tilte
                        }</div>
                        <div class="product_card-price">${product[i].price}
                            <i class="dong-icon">đ</i>
                        </div>
                    </div>
                    <a href="#" class="btn_detail">Chi tiết</a>
                </div>      
            `);
    } else {
      $(`.product-sort${i + 1}`).hide();
    }
  }
}

$(".sortNewArrive").click(function () {
  if ($(".sortNewArrive").hasClass("active")) {
    sortNewArrive();
  }
});

//Sắp xếp giá thấp đến cao
const price = [];
for (var i = 0; i < product.length; i++) {
  price.push(Number(product[i].price));
}

function sortPriceUp() {
  price.sort();

  for (var i = 0; i < price.length; ) {
    for (var j = 0; j < product.length; j++) {
      if (price[i] == Number(product[j].price)) {
        $(`.product-sort${i + 1}`).replaceWith(`
                <div class="product-sort${i + 1}">
                    <div id="img${i + 1}" class="section_product-card">
                        <div class="flip-card">
                             <div class="flip-card-inner">
                                <div class="front hot">
                                    <img
                                        src="${product[j].img}"
                                        alt=""
                                    />
                                </div>
                            <div class="back hot">
                                <img
                                    src="${product[j].img_hover}"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div class="product_card-content">
                        <div class="product_card-series">${
                          product[j].series
                        }</div>
                        <div class="product_card-title">${
                          product[j].tilte
                        }</div>
                        <div class="product_card-price">${product[j].price}
                            <i class="dong-icon">đ</i>
                        </div>
                    </div>
                    <a href="#" class="btn_detail">Chi tiết</a>
                </div>      
                `);
        i++;
      }
    }
  }
}

$(".sortPriveUp").click(function () {
  if ($(".sortPriveUp").hasClass("active")) {
    sortPriceUp();
  }
});

//Sắp xếp giá cao đến thấp
function sortPriveDown() {
  price.sort((a, b) => {
    if (a > b) {
      return -1;
    }
    if (a < b) {
      return 1;
    }
    return 0;
  });

  for (var i = 0; i < price.length; ) {
    for (var j = 0; j < product.length; j++) {
      if (price[i] == Number(product[j].price)) {
        $(`.product-sort${i + 1}`).replaceWith(`
                <div class="product-sort${i + 1}">
                    <div id="img${i + 1}" class="section_product-card">
                        <div class="flip-card">
                             <div class="flip-card-inner">
                                <div class="front hot">
                                    <img
                                        src="${product[j].img}"
                                        alt=""
                                    />
                                </div>
                            <div class="back hot">
                                <img
                                    src="${product[j].img_hover}"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div class="product_card-content">
                        <div class="product_card-series">${
                          product[j].series
                        }</div>
                        <div class="product_card-title">${
                          product[j].tilte
                        }</div>
                        <div class="product_card-price">${product[j].price}
                            <i class="dong-icon">đ</i>
                        </div>
                    </div>
                    <a href="#" class="btn_detail">Chi tiết</a>
                </div>      
                `);
        i++;
      }
    }
  }
}

$(".sortPriveDown").click(function () {
  if ($(".sortPriveDown").hasClass("active")) {
    sortPriveDown();
  }
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
