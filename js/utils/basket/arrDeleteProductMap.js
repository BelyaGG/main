import { totalSum } from './totalSum.js';
import { BASKET_ARRAY } from '../../arr/basketArra.js'

export const arrDeleteProductMap = () => {
    const allDivsDel = document.querySelectorAll('.deleteProduct');
    let arr = [];
    arr = [...allDivsDel];
    arr.map ((el) => {
        el.addEventListener('click', delProduct)
    })
}

const delProduct = () => {
    const idAllli = event.target.parentNode.dataset.idAllLi;
    BASKET_ARRAY.splice(idAllli-1, 1);
    event.target.parentNode.remove();
    totalSum()
    document.querySelector('.badge').innerHTML = `${BASKET_ARRAY.length}`
}
  