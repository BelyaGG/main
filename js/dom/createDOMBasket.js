import { BASKET_ARRAY } from '../arr/basketArra.js';
import { basketArrayMap } from '../utils/basket/basketArrayMap.js';
import { sizeArrMap } from '../utils/basket/sizeArrMap.js';
import { createTotalMoney } from '../utils/basket/createTotalMoney.js';
import { totalSum } from '../utils/basket/totalSum.js';
import { arrDeleteProductMap } from '../utils/basket/arrDeleteProductMap.js';
import { checkedPayment } from '../utils/basket/checkedPayment.js';
import { backToMainPage } from '../utils/basket/backToMainPage.js';
import { checkSize } from '../utils/basket/checkSize.js';
import { checkInform } from '../utils/basket/checkInform.js';
import { createLastPage } from '../utils/basket/createLastPage.js';

const ROOT = document.getElementById('root');
const WRAPPER = document.getElementById('wrapper');

export const createDOMBasket = () => {
    
    WRAPPER.style.display = "none";

    const container = document.createElement('div');
    container.className = 'container';
    
    const row = document.createElement('div');
    row.className = 'row';

    const col = document.createElement('div');
    col.className = 'col-md-4 order-md-2 mb-4';
    col.innerHTML = `
        <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Товары в корзины:</span>
            <span class="badge badge-secondary badge-pill">${BASKET_ARRAY.length}</span>
        </h4>
        <ul class="list-group mb-3">

        </ul>
    `

    const colTwo = document.createElement('div');
    colTwo.className = 'col-md-8 order-md-1';
    colTwo.innerHTML = `
        <h4 class="mb-3">Billing address</h4>
        <form class="needs-validation" novalidate="">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" class="form-control" id="firstName" name="fname" placeholder="" value="" required="">
                    <div class="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" name="lname" placeholder="" value="" required="">
                    <div class="invalid-feedback">
                        Valid last name is required.
                    </div>
                </div>
            </div>

            <div class="mb-3">
                <label for="address">Address</label>
                <input type="text" class="form-control" id="address" name="address" placeholder="1234 Main St" required="">
                <div class="invalid-feedback">
                    Please enter your shipping address.
                </div>
            </div>
            <div class="mb-3">
                <label for="phone">Address</label>
                <input type="text" class="form-control" id="phone" name="phone" placeholder="+375(29)1111111" required="">
                <div class="invalid-feedback">
                    Please enter your number phone. 
                </div>
            </div>

            <div class="row">
                <div class="col-md-5 mb-3">
                    <label for="country">Country</label>
                    <select class="custom-select d-block w-100" name="country" id="country" required="">
                        <option value="">Choose...</option>
                        <option>United States</option>
                    </select>
                    <div class="invalid-feedback">
                        Please select a valid country.
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="state">State</label>
                    <select class="custom-select d-block w-100" name="state" id="state" required="">
                        <option value="">Choose...</option>
                        <option>California</option>
                    </select>
                    <div class="invalid-feedback">
                        Please provide a valid state.
                    </div>
                </div>
            </div>
            <hr class="mb-4">
            <hr class="mb-4">

            <h4 class="mb-3">Payment</h4>
            <div class="d-block my-3">
                <div class="custom-control custom-radio">
                    <input id="credit" name="paymentMethod" type="radio" class="custom-control-input"  required="">
                    <label class="custom-control-label" for="credit">Credit card</label>
                </div>
                <div class="custom-control custom-radio">
                    <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" checked required="">
                    <label class="custom-control-label" for="debit">Cash on delivery</label>
                </div>
            </div>
            <div class="credit_card_activ">  
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="cc-name">Name on card</label>
                        <input type="text" class="form-control" id="cc-name" placeholder="" required="">
                        <small class="text-muted">Full name as displayed on card</small>
                        <div class="invalid-feedback">
                            Name on card is required
                        </div>
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="cc-number">Credit card number</label>
                        <input type="text" class="form-control" id="cc-number" placeholder="" required="">
                        <div class="invalid-feedback">
                            Credit card number is required
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3 mb-3">
                        <label for="cc-expiration">Expiration</label>
                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required="">
                        <div class="invalid-feedback">
                            Expiration date required
                        </div>
                    </div>
                    <div class="col-md-3 mb-3">
                    <label for="cc-cvv">CVV</label>
                    <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
                    <div class="invalid-feedback">
                        Security code required
                    </div>
                </div>
            </div>
        </div>
        <hr class="mb-4">
        <div class="NoSelSize"> Не выбран размер </div>
        <button class="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
        </form>
    `

    row.appendChild(col);
    row.appendChild(colTwo);
    container.appendChild(row);
    ROOT.appendChild(container);

    
    basketArrayMap();
    sizeArrMap();
    createTotalMoney();
    totalSum();
    arrDeleteProductMap();
    checkedPayment();
    backToMainPage();

    document.querySelector('.needs-validation').addEventListener("submit", function(e){
        e.preventDefault()
        checkSize() && checkInform() ? createLastPage() : console.log('Одна из форм не заполнена')
    })
    
}
