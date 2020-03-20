import { FLIGHTS_ARRAY } from '../../arr/Flights.js';
import { BASKET_ARRAY } from '../../arr/Basker_array.js';
import { checkLi } from './checkLi.js'

export const addTicketBasket = () => {
    if ( event.target.className == 'btnBuy' && localStorage.getItem("isLogin") == 'true' ){
        BASKET_ARRAY.unshift(FLIGHTS_ARRAY[event.target.dataset.id])
        document.querySelector('.tickit_basket').innerHTML = `${BASKET_ARRAY.length}`;
        document.querySelector('.info-basket').innerHTML = `Basket ( ${BASKET_ARRAY.length} )`
    }else if ( event.target.className == 'btnBuy'){
        alert('Login in pleas')
    }else if (event.target.className == 'flight') {
        checkLi();
    }   
}




