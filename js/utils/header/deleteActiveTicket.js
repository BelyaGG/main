import { ACTIVE_TICKET } from '../../arr/ActiveTicket.js'

export const deleteActiveTicket = () => {
    if (event.target.className == 'flight-active-delete'){
        const index = event.target.dataset.delete
        ACTIVE_TICKET.splice(index,1);
        event.target.parentNode.remove();
        document.querySelector('.info-ticket').innerHTML = `Active (${ACTIVE_TICKET.length})`;
    }
    
}