const onlineLoansBlockNumberLeft = document.querySelector('.online-loans__block__number__left');
const onlineLoansBlockNumberRight = document.querySelector('.online-loans__block__number__right');
const rangeSlider = document.querySelector('.range-slider input');


rangeSlider.addEventListener("input", ()=>{
    let value = rangeSlider.value;
    onlineLoansBlockNumberLeft.textContent = value;
    onlineLoansBlockNumberRight.textContent = value;
} );