const rangeSlider = document.querySelector('.range-slider');
const rangeSliderCircle = document.querySelector('.range-slider__circle');
const rangeSliderLine = document.querySelector('.range-slider__line');
const onlineLoansBlockNumberLeft =  document.querySelector('.online-loans__block__number__left');
const onlineLoansBlockNumberRight =  document.querySelector('.online-loans__block__number__right');



const rangeSliderCircleX = rangeSliderCircle.getBoundingClientRect().x;



const minLeft = 0;
const maxRight = 100000;
const diapazon = minLeft + maxRight;
onlineLoansBlockNumberLeft.innerHTML = `${minLeft}`;
onlineLoansBlockNumberRight.innerHTML = `${maxRight}`;


let currentLeft = rangeSliderCircle;


const mousemoveHandler = (e) =>{
    
    if( (e.x > rangeSliderCircle) && (e.x < currentRight ) ){
        console.log('here');
        let w = getComputedStyle(rangeSliderCircle);
        w = parseInt(w);
        let offSet = e.x - rangeSliderCircle - w/2;
        currentLeft = rangeSliderCircle + offSet;
        
        
        rangeSliderCircle.style.left = `${offSet}px`;
        rangeSliderLine.style.left = `${offSet}px`
        const movedInPixel = (currentLeft - rangeSliderCircle) > 0 ? (currentLeft - rangeSliderCircle) : 0;
        
        const movedInPercent = movedInPixel * 100 / length;
        
        const Indollars = Math.round(( diapazon  / 100 ) * movedInPercent);
        onlineLoansBlockNumberLeft.innerHTML = `$ ${minLeft+Indollars}`;
        
    }
}
const clickHandler = (e) =>{
    document.addEventListener('mousemove', mousemoveHandler);
    document.addEventListener('mouseup', 
            () => document.removeEventListener('mousemove', mousemoveHandler));
}
rangeSliderCircle.addEventListener('mousedown', clickHandler )