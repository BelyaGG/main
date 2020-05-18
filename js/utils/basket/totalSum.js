
export const totalSum = () => {
    let arr = [...document.querySelectorAll('.moneyProduct')];
    let sum = 0;
    arr.map( (el) => {
        return sum += +el.innerHTML.split('').slice(1).join('');
        
    })
    document.querySelector('.totalSum').innerHTML = `${sum}`;
}
