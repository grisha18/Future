const onlineLoansBlockNumberLeft = document.querySelector('.online-loans__block__number__left');
const onlineLoansBlockNumberRight = document.querySelector('.online-loans__block__number__right');
const rangeSlider = document.querySelector('.range-slider');


rangeSlider.onInput = ( ()=>{
    let value = rangeSlider.value;
    onlineLoansBlockNumberLeft.textContent = value;
} )