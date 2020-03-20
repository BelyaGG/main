import { BASKET_ARRAY } from '../arr/Basker_array.js';
import { createTicketBasket } from '../utils/header/createTicketBasket.js';
import { totalSum } from '../utils/totalSum.js';
import { addEventNum } from '../utils/header/addEventNum.js';
import { clickBtnOk } from '../utils/header/clickBtnOk.js';
import { clickBtnCancel } from '../utils/header/clickBtnCancel.js';

export const renderBasket = () => {
    document.querySelector('.info-window').innerHTML = `
        <ul class="basket-window"> </ul>
        <div class="totalSum"> $ </div>
        <div class="info-window-btn""> 
            <button class="info-window-btn-cancel"> Cancel </button>
            <button class="info-window-btn-ok"> Ok </button>
        </div>
    `;

    BASKET_ARRAY.map(createTicketBasket)

    totalSum();
    addEventNum();

    document.querySelector('.info-window-btn-ok').addEventListener('click', clickBtnOk )
    document.querySelector('.info-window-btn-cancel').addEventListener('click', clickBtnCancel)
}

