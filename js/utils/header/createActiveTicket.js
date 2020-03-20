import { deleteActiveTicket } from './deleteActiveTicket.js'

export const createActiveTicket = ({from,to,date,airline,price,num},index) => {

    const li = document.createElement('li');
    li.className = 'flight-active';
    li.innerHTML = `
        <div class="flight-active-container" data-id="${index}" >
            <div class="flight-active-delete" data-delete="${index}" > Х </div>
            <div class="flight-active-info">
                <h3>${from}→${to} </h3>
                <p>${airline}<p>
                <span>${date}</span>
            </div>
            <div class="flight-active-money">
                <div class="flight-active-price" data-price="${index}">$ ${price}</div>
                <div class="flight-active-num"> ${num} </div>
            </div>
        </div>
    `

    document.querySelector('.active-window').appendChild(li);

    li.addEventListener('click', deleteActiveTicket);

}