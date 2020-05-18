import { BASKET_ARRAY } from '../../arr/basketArra.js';
import { notSelectedSize } from './notSelectedSize.js';

export const basketArrayMap = () => {
    BASKET_ARRAY.map(productInBasket)
}

const productInBasket = ({ title,brend,money,chosenSize,size },index) => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between lh-condensed';
    li.dataset.idAllLi = index + 1;
    li.innerHTML = `
        <div class="allInform">
            <h6 class="my-0">${title}  <span class="lengthChosenSize">x${chosenSize.length}</span></h6>
            <small class="text-muted">${brend}</small>
            <div class="chosenSize_basket" data-id-div-size="${index+1}">Size: ${chosenSize}</div> 
            <div class="noSizeDiv" style="color: red;">Размер не выбран</div>
        </div>
        <div class="container_money">
            <span class="text-muted moneyProduct">$${money*chosenSize.length}</span>
            <span class="text-money">For one $${money} </span>
        </div>
        <div class="deleteProduct"> ❌ </div>
    `;

    document.querySelector('.list-group').append(li);

    notSelectedSize(chosenSize,size,index);

}