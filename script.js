const onlineLoansBlockNumberLeft = document.querySelector('.online-loans__block__number__left');
const onlineLoansBlockNumberRight = document.querySelector('.online-loans__block__number__right');
const rangeSlider = document.querySelector('.range-slider input');
const rangeSliderCircle = document.querySelector('.range-slider__circle');
const rangeSliderCircleDate = document.querySelector('.range-slider__circle__date');


const rangeSliderDate = document.querySelector('.range-slider__date input');
const onlineLoansBlockPrice = document.querySelector('.online-loans__block__price');
const onlineLoansBlockDatePrice = document.querySelector('.online-loans__block__date__price');
const burger = document.querySelector('.burger');
const menuList = document.querySelector('.menu-list');



rangeSliderCircle.addEventListener("input", ()=>{
    let value = rangeSliderCircle.value;
    onlineLoansBlockPrice.textContent = value;
} );



rangeSliderCircleDate.addEventListener("input", ()=>{
    let value = rangeSliderCircleDate.value;
    onlineLoansBlockDatePrice.textContent = value;
} );



burger.addEventListener('click', () =>{

    menuList.classList.toggle('menu-shown');
    burger.classList.toggle('burger-rotated');

})