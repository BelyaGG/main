export const sliderDisplayFlex = (index) => {
    document.querySelector(`.section-slider-top-wraper[data-slider-name='${index}']`).style.display = 'flex';
    document.querySelector(`.eclipseImg[data-id='${index}']`)
        .src = 'https://raw.githubusercontent.com/BelyaGG/shop/SHOp-v/img/Ellipse1.png';
}