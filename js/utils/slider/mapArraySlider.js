import { SLIDER_ARRAY } from '../../arr/sliderArray.js';

export const mapArraySlider = () => {
    SLIDER_ARRAY.map(createSlider);
}


const createSlider = ({ img , title , des, button }, index ) => {
    const sectionWrapper = document.createElement('div');
    sectionWrapper.className = 'section-slider-top-wraper';
    sectionWrapper.style.display = 'none';
    sectionWrapper.dataset.sliderName = index + 1;
    sectionWrapper.innerHTML = `
        <div class="section-slider-top-img">
            <img src="${img}" alt="">
        </div>
        <div class="section-slider-top-titles">
            <div class="section-slider-top-titles-title">${title}</div>
            <div class="section-slider-top-titles-des">${des}</div>
            <div class="section-slider-top-titles-button"> 
                <button>${button}</button>
            </div>
        </div>
    `;

    document.querySelector('.slide').appendChild(sectionWrapper);
}