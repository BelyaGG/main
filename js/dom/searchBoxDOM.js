import { createAllFlights } from '../utils/searchBox/allFlights.js'

const WRAPPER = document.querySelector('#wrapper');

export const searchBox = () => {
    const searchBox = document.createElement('div');
    searchBox.className = 'search-box';

    const h1 = document.createElement('h1');
    h1.className = 'flight-title'
    h1.innerHTML = 'All flights'

    const ul = document.createElement('ul');
    ul.className = 'allFlights'

    searchBox.appendChild(h1);
    searchBox.appendChild(ul);
    WRAPPER.appendChild(searchBox);

    createAllFlights()
}