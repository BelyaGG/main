import { mainDOM } from '../dom/mainDOM.js';

const WRAPPER = document.querySelector('#wrapper')

export const createMainPage = (event) => {
    event.preventDefault();
    WRAPPER.innerHTML = ``;

    mainDOM();
}