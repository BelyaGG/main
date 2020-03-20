import { FLIGHTS_ARRAY } from '../../arr/Flights.js';
import { addComments } from './addComments.js';

export const createCommentsContainer = (target) => {
    target.innerHTML = `
        <div class="flight-container"> 
            <div class="flight-container-comments">
                <div class="flight-sendComment">
                    <input type="text" > </input>
                    <button class="btn_send_comment" data-btn-com-id=${target.dataset.liId}> Send </button>
                </div>
                <div class="flight-allComments" data-comments-id=${target.dataset.liId}>
                </div>
            </div>
        </div>
    `

    const ul = document.createElement('ul')
    ul.className = "ul-commetns"

    const div = document.querySelector('.flight-allComments');
    div.appendChild(ul)

    FLIGHTS_ARRAY[target.dataset.liId].comments.map((el)=>{
        const li = document.createElement('li');
        li.className = 'li-comments'
        li.innerHTML = `<span>${el}</span>`
        ul.appendChild(li)
    })

    document.querySelector('.btn_send_comment').addEventListener('click', addComments)
    
}
