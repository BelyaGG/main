import { BASKET_ARRAY } from "../../arr/Basker_array.js"

export const clickBtnCancel = () => {
    document.querySelector('.info-window').innerHTML = `
        <div class="purchase"> You have canceled the order </div>
    `
    BASKET_ARRAY.length = 0;
    document.querySelector('.info-basket').innerHTML = 'Basket'
    document.querySelector('.tickit_basket').innerHTML = ''
}