import { ACTIVE_TICKET } from "../arr/ActiveTicket.js";
import { createActiveTicket } from '../utils/header/createActiveTicket.js'

export const renderActive = () => {
    document.querySelector('.info-window').innerHTML = `
        <ul class="active-window"> </ul>
    `;

    ACTIVE_TICKET.map(createActiveTicket)
}
