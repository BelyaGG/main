import { deleteTicket } from './deleteTicket.js';

export const createTicketBasket = ({from,to,date,airline,price},index) => {

    const li = document.createElement('li');
    li.className = 'flight-basket';
    li.innerHTML = `
        <div class="flight-basket-container" data-id="${index}" >
            <div class="flight-basket-delete" data-delete="${index}" > Х </div>
            <div class="flight-basket-info">
                <h3>${from}→${to} </h3>
                <p>${airline}<p>
                <span>${date}</span>
            </div>
            <div class="flight-basket-money">
                <div class="flight-basket-price" data-price="${index}">$ ${price}</div>
                <input class="inputBasketNum" type="number" placeholder="Number" value="1" name="basketNum">
            </div>
        </div>
    `

    document.querySelector('.basket-window').appendChild(li);

    li.addEventListener('click', deleteTicket);

}