// start slider
const $ = document.querySelector.bind(document);

const logoBtn = $(".logo");

//logoBtn
logoBtn.addEventListener("click", () => {
  location.reload();
});

//Chuyen hinh anh content
var index = 1;
changeImage = function () {
  var imgs = ["./css/img/slider1.png", "./css/img/slider2.png"];
  document.getElementById("slider_img").src = imgs[index];
  index++;
  if (index == 2) {
    index = 0;
  }
};
setInterval(changeImage, 5000);
