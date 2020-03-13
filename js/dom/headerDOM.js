import { myTicketsEvent } from '../utils/header/myTicketsEvent.js';
import { renderBasket } from './renderBasket.js'
import { renderActive } from './renderActive.js'

const WRAPPER = document.querySelector('#wrapper');

export const headerDOM = () => {
    const header = document.createElement('div');
    header.className = 'header';

    const div = document.createElement('div')
    div.className = 'header_top'

    const logo = document.createElement('div');
    logo.className = 'header_top__logo'
    logo.innerHTML = 'TICKET'

    const btn_div = document.createElement('div');
    btn_div.innerHTML = `
        <div class=btn_div> 
            <button class ="btn_myTickets">My Tickets</button>
            <div class=tickit_basket> </div>
        </div>
    `
   
    const info = document.createElement('div');
    info.className = 'info-container';
    info.innerHTML = `
        <div class="info-btns">
            <button class="info-ticket"> Active </button>
            <button class="info-histori"> Histori </button>
            <button class="info-basket"> Basket </button>
        </div>
        <div class="info-window">
        </div>
    `

    div.appendChild(logo)
    div.appendChild(btn_div)
    header.appendChild(div);
    header.appendChild(info);
    WRAPPER.appendChild(header);

    const btn = document.querySelector('.btn_myTickets');
    btn.addEventListener('click', myTicketsEvent)

    const btn_basket = document.querySelector('.info-basket');
    btn_basket.addEventListener('click', renderBasket)

    const btn_active = document.querySelector('.info-ticket');
    btn_active.addEventListener('click', renderActive)
} 
