import { createProductList } from './createProductList.js'
import { sendEmail } from '../sendEmail.js'


export const createLastPage = () => {

    sendEmail()
    const form = document.querySelector('.needs-validation');
    const [firstName, lastName, address, phone, country, state] = form.elements

    const container = document.querySelector('.container');
    container.innerHTML = '';

    document.querySelector('.buttonBackMain').style.display = "none";

    const div = document.createElement('div');
    div.className = 'lastPage'

    container.appendChild(div)

    let dataTimeNow = new Date();

    div.innerHTML = ` 
        Спасибо <span> ${firstName.value} ${lastName.value} </span> за ваш заказ,оператор свяжеться с вами по номеру <span> ${phone.value} </span> ,для потверждения заказа! </br>
        Дата заказа: <span> "${dataTimeNow}" </span> </br>
        Ориентировочная дата доставки: <span> "30/02/2020"</span>  </br>
        Адресс доставки:<span>  ${country.value}, ${state.value}, ${address.value}</span> </br>
        <div class="productsLastpage"> 
            Товары:
        </div>

        <button class="end"> Main Page </button>
    `
    createProductList()
    

    const btn = document.querySelector('.end');
    btn.addEventListener('click', () => location.reload())
}