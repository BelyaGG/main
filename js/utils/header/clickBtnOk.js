import { confirmOrder } from './confirmOrder.js';
import { clickBtnCancel } from './clickBtnCancel.js';

export const clickBtnOk = () => {
    const infoWindow = document.querySelector('.info-window');
    infoWindow.innerHTML = '';

    const form = document.createElement('form');
    form.className = 'form-basket';
    form.innerHTML = `
        <label for="cc-name">Name on card</label>
        <input type="text" class="form-control" id="cc-name" placeholder="" required="">
        <label for="cc-number">Credit card number</label>
        <input type="text" class="form-control" id="cc-number" placeholder="" required="">
        <label for="cc-expiration">Expiration</label>
        <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
        <label for="cc-cvv">CVV</label>
        <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
    `;

    const div = document.createElement('div');
    div.className = "basket-btn-form";
    div.innerHTML = `
        <button class="basket-btn-from-cancel"> Cancel </button>
        <button class="basket-btn-from-ok"> Ok </button>
    `;

    infoWindow.appendChild(form);
    infoWindow.appendChild(div);

    document.querySelector('.basket-btn-from-ok').addEventListener('click', confirmOrder);
    document.querySelector('.basket-btn-from-cancel').addEventListener('click', clickBtnCancel)
}

