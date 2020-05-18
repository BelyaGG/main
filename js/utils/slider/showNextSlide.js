import { SLIDER_ARRAY } from '../../arr/sliderArray.js';
import { sliderDisplayNone } from './sliderDisplayNone.js';
import { sliderDisplayFlex } from './sliderDisplayFlex.js';

export const showNextSlide = () => { 
    let index = 1;
    setInterval(function nextSl() {
        if(index < SLIDER_ARRAY.length){
            sliderDisplayNone(index);
            index++;
            sliderDisplayFlex(index);
        } else {
            sliderDisplayNone(index);
            index = 1;
            sliderDisplayFlex(index);
        }
    }, 3000);
}