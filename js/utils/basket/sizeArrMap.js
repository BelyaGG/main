import { clickSizeActive } from './clickSizeActive.js';

export const sizeArrMap = () => {
    const allDivSize = document.getElementsByClassName('chosenSize_basket');
    const arr = [...allDivSize];
    arr.map((el,index) => {
        el.addEventListener('click', () => clickSizeActive(index));
    })
}

