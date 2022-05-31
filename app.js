// start slider
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const body = $('#shop_body');
const imgSlider = $$('.slider_image');
const imgWrapper = $('.slider-wrapper');
const iconRightBtn = $('.icon_right');
const iconLeftBtn = $('.icon_left');
const backTopBtn = $('.backtop');

//Chuyen hinh anh content
var indexImg = 0;
var positionX = 0;
var sliderWidth = imgSlider[0].offsetWidth;

setInterval(()=>{
  indexImg++;
  if (indexImg > 0 && indexImg < imgSlider.length) {
    positionX = positionX - sliderWidth;
    imgWrapper.style = `transform: translate3d(${positionX}px, 0px, 0px); transition: all 0.5s ease 0s;`;
  }
  if (indexImg == imgSlider.length){
    indexImg = 0;
    positionX = 0;
    imgWrapper.style = `transform: translate3d(0px, 0px, 0px)`;
  }

},5000)

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

//Backtop
window.onscroll = function() {scroll()};
function scroll () {
  if (document.documentElement.scrollTop > 310) {
    backTopBtn.style.display = "flex";
  } else {
    backTopBtn.style.display = "none";
  }
}
backTopBtn.addEventListener("click", () => {
  document.documentElement.scrollTop = 0;
})