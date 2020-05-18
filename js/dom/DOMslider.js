import { SLIDER_ARRAY } from '../arr/sliderArray.js';
import { mapArraySlider } from '../utils/slider/mapArraySlider.js';
import { createEllipseWrapper } from '../utils/slider/createEllipseWrapper.js';
import { showFirstSlider } from '../utils/slider/showFirstSlide.js';
import { showNextSlide } from '../utils/slider/showNextSlide.js';

const WRAPPER = document.getElementById('wrapper');

export const createSliderDOM = () => {

    const sectionSlider = document.createElement('section');
    sectionSlider.className = 'section-slider-top';
    const sectionInner = document.createElement('div');
    sectionInner.className = 'section-inner slide';

    sectionSlider.appendChild(sectionInner);
    WRAPPER.appendChild(sectionSlider);

    mapArraySlider();
    createEllipseWrapper();
    showFirstSlider();
    showNextSlide();
    
}