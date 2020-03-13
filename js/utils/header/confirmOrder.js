import { validateForm } from '../header/validateForm.js'
import { BASKET_ARRAY } from '../../arr/Basker_array.js';
import { ACTIVE_TICKET } from '../../arr/ActiveTicket.js';
// import { sendEmail } from '../sendEmail.js';

export const confirmOrder = () => {
    const allInput = document.querySelectorAll('.form-control');
    const arr = [...allInput];
    
    const arrValidate = arr.map(validateForm).filter(el => el == false);
    if (arrValidate.length == 0 ){

        // sendEmail();

        BASKET_ARRAY.map(el => {
            ACTIVE_TICKET.unshift(el)
        })

        document.querySelector('.info-window').innerHTML = `
            <div class="purchase">Thanks for purchase, come again<div>
        `;
        
        BASKET_ARRAY.splice(0,BASKET_ARRAY.length);

        document.querySelector('.tickit_basket').innerHTML = ``;
        document.querySelector('.info-basket').innerHTML = `Basket`

        document.querySelector('.info-ticket').innerHTML = `Active (${ACTIVE_TICKET.length}) `
        
    } 
} 