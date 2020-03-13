import { BASKET_ARRAY } from '../../arr/Basker_array.js'
import { totalSum } from '../totalSum.js';

export const deleteTicket = () => {
    if (event.target.className == "flight-basket-delete"){
        const index = event.target.dataset.delete;
        BASKET_ARRAY.splice(index,1);
        event.target.parentNode.remove();
    }

    document.querySelector('.info-basket').innerHTML = `Basket (${BASKET_ARRAY.length})`;
    document.querySelector('.tickit_basket').innerHTML = `${BASKET_ARRAY.length}`;

    totalSum();
}