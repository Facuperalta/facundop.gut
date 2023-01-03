const fulImgBox = document.getElementById("fulImgBox");
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display="flex";
    fulImg.src = reference;
}

function closeImg(){
    fulImgBox.style.display = "none";
}

document.querySelector(".hamburger").addEventListener("click", animateBars);
var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

var container__menu = document.querySelector(".contenedor_pag");

function animateBars(){
  line1__bars.classList.toggle("activeline1__bars-menu");
  line2__bars.classList.toggle("activeline2__bars-menu");
  line3__bars.classList.toggle("activeline3__bars-menu");

    container__menu.classList.toggle("activecontenedor_pag");
}

const btnEl = document.querySelector('.btn');

const toggleOptions = () => {
    const wrapperEl = document.querySelector('.wrapper');
    const iconEl = btnEl.querySelector('i');

    wrapperEl.classList.toggle('active');

    if (iconEl.classList.contains('ri-share-line')){
        iconEl.classList
        .replace('ri-share-line', 'ri-close-line');
    } else {
            iconEl.classList
            .replace('ri-close-line', 'ri-share-line');
    }
};

const menuDesplegable = document.querySelector(".hamburger");
const btnMenu = document.querySelector(".contenedor_pag");

menuDesplegable.addEventListener("click", toggleBtnMenu);

function toggleBtnMenu(){
    btnMenu.classList.toggle("inactive");
}
