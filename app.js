// start slider
var index = 1;
changeImage = function () {
  var imgs = ["./css/img/slider_1.webp", "./css/img/slider_2.webp"];
  document.getElementById("slider_img").src = imgs[index];
  index++;
  if (index == 2) {
    index = 0;
  }
};
setInterval(changeImage, 3000);
