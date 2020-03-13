import { FLIGHTS_ARRAY } from '../../arr/Flights.js';
import { craeteFlight } from '../header/craeteFlight.js';

export const searchFlights = (form) => {
    const [ inputFrom, inputTo, inputDate ] = form.elements;
    const date = inputDate.value.split('-').reverse().join('/');

    const ul = document.querySelector('.allFlights');
    ul.innerHTML = '';

    FLIGHTS_ARRAY.map((el) => {
        if (el.from == inputFrom.value  && el.to == inputTo.value && el.date == date){
            craeteFlight(el);
        }
    })

}