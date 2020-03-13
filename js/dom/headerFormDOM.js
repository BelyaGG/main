import { addButtonEvent } from '../utils/header/addButtonEvent.js'

export const headerForm = () => {
    const header = document.querySelector('.header');

    const headerForm = document.createElement('div');
    headerForm.className = 'headerForm';

    headerForm.innerHTML = `
        <form class="form_search">
            <input id="inputFrom" type="text" placeholder="From" name="from" />
            <input id="inputTo" type="text" placeholder="To" name="to"/>
            <input id="inputDate" type="date" placeholder="Date" name="data"/>
            <input id="inputNum" type="number" placeholder="Number" name="num"/>
            <button id="sub" type="submit"> Найти </button>
        </form>
    `

    header.appendChild(headerForm);

    const form = document.forms[0];
    form.addEventListener("submit", addButtonEvent);
}