import { createCommentsContainer } from './createCommentsContainer.js'
import { createDescription } from './createDescription.js'


export const checkLi = () => {
    const target = event.target.childNodes[1].childNodes[1].className;
    if (target == 'flight-info' ){  
        createCommentsContainer(event.target);
    }
    else if (target == 'flight-container-comments') {
        const container = event.target.childNodes[1];
        container.innerHTML = '';
        createDescription(container, event.target.dataset.liId);
    }
}