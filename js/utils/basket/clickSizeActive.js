import { BASKET_ARRAY} from '../../arr/basketArra.js';
import { totalSum } from './totalSum.js';



export const clickSizeActive = (index) => {
    if (document.querySelectorAll('.noSizeDiv')[index]) {
        document.querySelectorAll('.noSizeDiv')[index].style.display = "none";
    }
    if (event.target.tagName == 'DIV') {
        if (event.target.childNodes.length > 1){
            const allInputForm = event.target.getElementsByClassName("checkInputSize");
            let arr = [...allInputForm];
            let arrCheckSize = []
            arr.map( (el) => {
                if (el.checked){
                    arrCheckSize.unshift(el.value)
                }
            })
            if(arrCheckSize.length == 0){
                document.querySelectorAll('.noSizeDiv')[index].style.display = "block";
            }else {
                BASKET_ARRAY[event.target.dataset.idDivSize-1].chosenSize = arrCheckSize;
                event.target.innerHTML = `Size: ${BASKET_ARRAY[event.target.dataset.idDivSize-1].chosenSize}`;

                document.querySelectorAll('.moneyProduct')[index].innerHTML = `$${BASKET_ARRAY[index].money * BASKET_ARRAY[index].chosenSize.length}`;
                document.querySelectorAll('.lengthChosenSize')[index].innerHTML = `x${BASKET_ARRAY[index].chosenSize.length}`;
                totalSum();

            }
        }else {
            
            const sizeBasket = document.querySelectorAll('.chosenSize_basket')[index];
            sizeBasket.innerHTML = 'Size: ';
            const formSize = document.createElement('form');
            formSize.className = "sizeFromBasker";
            formSize.dataset.idFormSize = index+1;
            BASKET_ARRAY[index].size.map( (el) => {
                const inputSize = document.createElement('input');
                inputSize.type = 'checkbox';
                inputSize.className = 'checkInputSize'
                inputSize.name = 'size';
                inputSize.value = `${el}`;
        
                const labelSize = document.createElement('label');
                labelSize.for = `${el}`;
                labelSize.innerHTML = `${el}`;
        
                formSize.appendChild(inputSize);
                formSize.appendChild(labelSize);
            })

            sizeBasket.appendChild(formSize)
        }
    }

}