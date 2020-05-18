import { BASKET_ARRAY } from '../../arr/basketArra.js'

export const createProductList = () => {
    const allProduct = document.querySelector('.productsLastpage');
    

    BASKET_ARRAY.map ((el) => {
        const productList = document.createElement('div')
        productList.innerHTML = `
            <span class="title"> ${el.title} </span>
            <span class="brend">${el.brend} </span>
            <span class="size"> Size: ${el.chosenSize}</span>
        `
        productList.className = 'productList'
        allProduct.appendChild(productList);
    })
}