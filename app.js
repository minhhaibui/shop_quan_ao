const $ = document.querySelector.bind(document);

const logoBtn = $('.logo');

//logoBtn
logoBtn.addEventListener("click", () => {
  location.reload();
});


//Chuyen hinh anh content
var index = 1;
changeImage = function () {
  var imgs = ["./css/img/slider_1.webp", "./css/img/slider_2.webp"];
  document.getElementById("slider_img").src = imgs[index];
  index++;
  if (index == 2) {
    index = 0;
  }
};
setInterval(changeImage, 5000);
