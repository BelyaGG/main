import { FLIGHTS_ARRAY } from '../../arr/Flights.js'

export const createDescription = (el,id) => {

    el.innerHTML = 
    `
        <div class="flight-info">
            <h3>${FLIGHTS_ARRAY[id].from}→${FLIGHTS_ARRAY[id].to} </h3>
            <p>${FLIGHTS_ARRAY[id].airline}<p>
            <span>${FLIGHTS_ARRAY[id].date}</span>
        </div>
        <div class="flight-btn">
            <button class="btnBuy" data-id="${id}">$ ${FLIGHTS_ARRAY[id].price}</button>  
        </div>
    `;

    
}