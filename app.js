// start slider
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const imgSlider = $$('.slider_image');
const iconRightBtn = $('.icon_right');
const iconLeftBtn = $('.icon_left');

//Chuyen hinh anh content
var indexImg = 0;

function changeImage () {
  for (var i = 0; i < imgSlider.length; i++) {
    imgSlider[i].style.display = "none";
  }
  indexImg++;
  if (indexImg > imgSlider.length) {
    indexImg = 1;
  }
  imgSlider[indexImg-1].style.display = "block";
  setTimeout(changeImage, 5000);
}
changeImage();

//chuyen hinh anh bang btn
function nextImg () {
  indexImg++;
  if (indexImg > imgSlider.length) {
    indexImg = 1;
  }
  imgSlider[indexImg].style.display = "block";
  imgSlider[indexImg - 1].style.display = "none";
}
iconRightBtn.addEventListener("click", () => {
  nextImg();
})

console.log(iconRightBtn)
console.log(iconLeftBtn)

