import Img from './imgs/bg-header.png';
import Img2 from './imgs/semen.png';
import Img3 from './imgs/slider1-photo.png';
import Img4 from './imgs/slider2-photo.png';
import Img5 from './imgs/slider3-photo.png';
import Img6 from './imgs/slider4-photo.png';
import Img7 from './imgs/slider5-photo.png';
import Img8 from './imgs/main-bg.png';
import Img9 from './imgs/foot-bg.png';
import Img10 from './imgs/det-img1.png';
import Img11 from './imgs/det-img2.png';
import Img12 from './imgs/det-img3.png';
import Img13 from './imgs/det-img4.png';
import Img14 from './imgs/det-sem.png';

let range = document.querySelectorAll(".slider__range")[0];
let rangeNumber = document.querySelectorAll(".slider__number-range")[0];
let range2 = document.querySelectorAll(".slider__range")[1];
let rangeNumber2 = document.querySelectorAll(".slider__number-range")[1];
let range3 = document.querySelectorAll(".slider__range")[2];
let rangeNumber3 = document.querySelectorAll(".slider__number-range")[2];
let range4 = document.querySelectorAll(".slider__range")[3];
let rangeNumber4 = document.querySelectorAll(".slider__number-range")[3];
range.oninput = function() {
    rangeNumber.innerHTML = this.value + "%";
}
range2.oninput = function() {
    rangeNumber2.innerHTML = this.value + "%";
}
range3.oninput = function() {
    rangeNumber3.innerHTML = this.value + "%";
}
range4.oninput = function() {
    rangeNumber4.innerHTML = this.value + "%";
}
const butPack = document.querySelector(".cracker-cons__but-slider");
const menuPack = document.querySelector(".pack-menu");
const pack1 = document.querySelectorAll(".pack-menu__item")[0];
const pack2 = document.querySelectorAll(".pack-menu__item")[1];
const pack3 = document.querySelectorAll(".pack-menu__item")[2];

butPack.addEventListener("click", function () {
    menuPack.style.display="block";
});
pack1.addEventListener("click", function () {
    menuPack.style.display="none";
    butPack.innerHTML=`${pack1.innerHTML}`;
});
pack2.addEventListener("click", function () {
    menuPack.style.display="none";
    butPack.innerHTML=`${pack2.innerHTML}`;
});
pack3.addEventListener("click", function () {
    menuPack.style.display="none";
    butPack.innerHTML=`${pack3.innerHTML}`;
});

const detailsBlock = document.querySelector(".details-bl");
const detailsBut = document.querySelector(".header__line-li_details");
const detailsButClose = document.querySelector(".details-bl__but-close");
detailsBut.addEventListener("click", function () {
    detailsBlock.style.display="flex";
});
detailsButClose.addEventListener("click", function () {
    detailsBlock.style.display="none";
});

const butPlus = document.querySelector('.cracker-cons__but-plus');
const butAdd = document.querySelector(".cracker-cons__but-add");
butPlus.onmouseover = function() {
    butAdd.classList.add("cracker-cons__but-add_hover-add");
    butPlus.classList.add("cracker-cons__but-plus_hover-plus");
}
butAdd.onmouseout = function() {
    butAdd.classList.remove("cracker-cons__but-add_hover-add");
    butPlus.classList.remove("cracker-cons__but-plus_hover-plus");
}