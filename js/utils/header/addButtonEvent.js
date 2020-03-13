import { validateForm } from './validateForm.js';
import { searchFlights } from './searchFlights.js'


export const addButtonEvent = (event) => {
    event.preventDefault();
    const form = document.forms[0];
    let arr = [...form.elements];
    arr.length = 4;

    const arrValidate = arr.map(validateForm).filter(el => el == false);
    if (arrValidate.length == 0 ){
        searchFlights(form);
    } 

}
