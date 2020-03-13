import { BASKET_ARRAY } from '../../arr/Basker_array.js';
import { totalSum } from '../totalSum.js '

export const selectNum = () => {
    const id = event.target.parentNode.parentNode.dataset.id;

    const sumTotal = BASKET_ARRAY[id].price * event.target.value;

    BASKET_ARRAY[id].num = event.target.value;
    
    event.target.previousElementSibling.innerHTML = `$ ${sumTotal}`

    totalSum();
}