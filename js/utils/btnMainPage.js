import { mainDOM } from '../dom/mainDOM.js'


export const btnMainPage = () => {
    const btn = document.querySelector('.btnMainPage');
    btn.addEventListener('click', click)
}

const click = () => {
    document.querySelector('#wrapper').innerHTML = '';
    localStorage.setItem("isLogin", false);

    mainDOM()
}