
export const totalSum = () => {
    const arr = [...document.querySelectorAll('.flight-basket-price')];

    const totalSum = arr.map( (el) => {
        return el.innerHTML.split(' ').slice(1).join('')
    }).reduce((sum, cur) => sum + +cur, 0);

    document.querySelector('.totalSum').innerHTML = `$${totalSum}`

}