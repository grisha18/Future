const onlineLoansBlockNumberLeft = document.querySelector('.online-loans__block__number__left');
const onlineLoansBlockNumberRight = document.querySelector('.online-loans__block__number__right');
const rangeSlider = document.querySelector('.range-slider input');
const rangeSliderDate = document.querySelector('.range-slider__date input');
const onlineLoansBlockPrice = document.querySelector('.online-loans__block__price');
const onlineLoansBlockDatePrice = document.querySelector('.online-loans__block__date__price');
const burger = document.querySelector('.burger');
const menuList = document.querySelector('.menu-list');
const headerTopButton = document.querySelector('.header-top__button');



rangeSlider.addEventListener("input", ()=>{
    let value = rangeSlider.value;
    onlineLoansBlockPrice.textContent = value;
} );



rangeSliderDate.addEventListener("input", ()=>{
    let value = rangeSliderDate.value;
    onlineLoansBlockDatePrice.textContent = value;
} );



burger.addEventListener('click', () =>{

    menuList.classList.toggle('menu-shown');
    headerTopButton.classList.toggle('header-top__button');
    burger.classList.toggle('burger-rotated');

})