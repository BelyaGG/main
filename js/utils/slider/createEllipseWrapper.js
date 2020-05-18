import { SLIDER_ARRAY } from '../../arr/sliderArray.js';

export const createEllipseWrapper = () => {
    const sliderEllipse = document.createElement('div');
    sliderEllipse.className = 'section-slider-top-ellipse';
    document.querySelector('.slide').appendChild(sliderEllipse);
    SLIDER_ARRAY.map(createEllipse)

}

const createEllipse = (none,index) => {
    const img = document.createElement('img');
    img.className = 'eclipseImg';
    img.dataset.id = index + 1;
    img.src = "https://raw.githubusercontent.com/BelyaGG/shop/SHOp-v/img/Ellipse.png";
    document.querySelector('.section-slider-top-ellipse').appendChild(img)
}