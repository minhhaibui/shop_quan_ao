<<<<<<< HEAD
// start slider
=======
const $ = document.querySelector.bind(document);

const logoBtn = $('.logo');

//logoBtn
logoBtn.addEventListener("click", () => {
  location.reload();
});


//Chuyen hinh anh content
>>>>>>> d43df97bd8e69a0b9e28c98f5259fa6c9bb35465
var index = 1;
changeImage = function () {
  var imgs = ["./css/img/slider_1.webp", "./css/img/slider_2.webp"];
  document.getElementById("slider_img").src = imgs[index];
  index++;
  if (index == 2) {
    index = 0;
  }
};
<<<<<<< HEAD
setInterval(changeImage, 3000);
=======
setInterval(changeImage, 5000);
>>>>>>> d43df97bd8e69a0b9e28c98f5259fa6c9bb35465
