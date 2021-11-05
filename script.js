const onlineLoansBlockNumberLeft = document.querySelector('.online-loans__block__number__left');
const onlineLoansBlockNumberRight = document.querySelector('.online-loans__block__number__right');
const rangeSlider = document.querySelector('.range-slider input');
const rangeSliderDate = document.querySelector('.range-slider__date input');
const onlineLoansBlockPrice = document.querySelector('.online-loans__block__price');
const onlineLoansBlockDatePrice = document.querySelector('.online-loans__block__date__price');


rangeSlider.addEventListener("input", ()=>{
    let value = rangeSlider.value;
    onlineLoansBlockPrice.textContent = value;
} );



rangeSliderDate.addEventListener("input", ()=>{
    let value = rangeSliderDate.value;
    onlineLoansBlockDatePrice.textContent = value;
} );