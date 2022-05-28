// start slider
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const imgSlider = $$('.slider_image');
const imgWrapper = $('.slider-wrapper');
const iconRightBtn = $('.icon_right');
const iconLeftBtn = $('.icon_left');

//Chuyen hinh anh content
var indexImg = 0;
var positionX = 0;
var sliderWidth = imgSlider[0].offsetWidth;

function changeImage () {
  if (indexImg >= 0 && indexImg < imgSlider.length) {
    indexImg++;
    positionX = positionX - sliderWidth;
    imgWrapper.style = `transform: translate3d(${positionX}px, 0px, 0px)`;
  }
  if (indexImg == imgSlider.length){
    indexImg = 0;
    positionX = 0;
    imgWrapper.style = `transform: translate3d(0px, 0px, 0px)`;
  }
  setTimeout(changeImage, 5000);
}
changeImage();

//chuyen hinh anh bang btn
function nextImg() {
  indexImg++;
  if (indexImg >= imgSlider.length) {
    indexImg = imgSlider.length - 1;
    return;
  }else {                                                                                          
    positionX = positionX - sliderWidth;
  }
  imgWrapper.style = `transform: translate3d(${positionX}px, 0px, 0px)`;
}
iconRightBtn.addEventListener("click", () => {
  nextImg();
});

function prevImg() {
  indexImg--;
  if (indexImg < 0) {
    indexImg = 0;
    return;
  }
  positionX = positionX + sliderWidth;
  imgWrapper.style = `transform: translate3d(${positionX}px, 0px, 0px)`;
  console.log(indexImg)
}
iconLeftBtn.addEventListener("click", () => {
  prevImg();
});



