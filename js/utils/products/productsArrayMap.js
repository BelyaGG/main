import { PRODUCTS_ARRAY } from '../../arr/productsArray.js';
import { createProducts } from './createProducts.js'

export const productsArrayMap = () => {
    PRODUCTS_ARRAY.map(createProducts);
}