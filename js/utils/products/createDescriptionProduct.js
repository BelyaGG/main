import { backMainPage } from './backMainPage.js';
import { BASKET_ARRAY } from '../../arr/basketArra.js'
import { PRODUCTS_ARRAY } from '../../arr/productsArray.js';
import { createFormSize } from './createFormSize.js'


const ROOT = document.getElementById('root');
const WRAPPER = document.getElementById('wrapper');

export const createDescriptionProduct = ({img:{xl},title,money,brend,size,description,chosenSize},index) => {
    WRAPPER.style.display = 'none';
    const descriptionProductWrapper = document.createElement('div');
    descriptionProductWrapper.className = 'product_wrapper';
    descriptionProductWrapper.innerHTML = `
        <img src="${xl}" alt="">
        <div class="products_titles">
            <div class="product_title"> <span class="spanproduct">Название:</span> ${title}</div>
            <div class="product_brend"> <span class="spanproduct">Производитель:</span> ${brend}</div>
            <div class="product_size"> <span class="spanproduct">Размеры:</span><form class="sizeFrom"></form></div>
            <div class="product_money"> <span class="spanproduct">Стоимость:</span> $${money}</div>
            <div class="product_description"><span class="spanproduct">Описание:</span> ${description}</div>
        </div>
        <div class="product_button"> 
            <button class="backProducts"> НАЗАД </button>
            <button class="addBasket"> В КОРЗИНУ </button>
        </div>
    `
    
    ROOT.appendChild(descriptionProductWrapper);
    createFormSize(size);
    
    document.querySelector('.backProducts').addEventListener("click", backMainPage);

    descriptionProductWrapper.onclick = () => {
        if (event.target.className == 'addBasket'){
            const sizeForm = document.getElementsByTagName('input');
            let arrSize = [...sizeForm];
            arrSize.map((el) => {
                if (el.checked == true){
                    if (!chosenSize.includes(el.value)){
                        chosenSize.push(el.value)
                    }
                }
            })
            BASKET_ARRAY.unshift(PRODUCTS_ARRAY[index]);
            document.querySelector('.basket-length').innerHTML = `${BASKET_ARRAY.length}`
        }
    }
}
