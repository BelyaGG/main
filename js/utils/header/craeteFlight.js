import { addTicketBasket } from '../searchBox/addTicketBasket.js';

export const craeteFlight = ({from,to,date,airline,price},index) => {
    const ul = document.querySelector('.allFlights');

    const li = document.createElement('li');
    li.dataset.liId = index;
    li.className = 'flight';
    li.innerHTML = `
        <div class="flight-container" >
            <div class="flight-info">
                <h3>${from}→${to} </h3>
                <p>${airline}<p>
                <span>${date}</span>
            </div>
            <div class="flight-btn">
                <button class="btnBuy" data-id="${index}">$ ${price}</button>  
            </div>
        </div>
    `


    ul.appendChild(li);

    li.addEventListener('click', addTicketBasket)
}
