
export const notSelectedSize = (chosenSize,size,index) => {
    if (chosenSize.length == 0) {
        const sizeBasket = document.querySelectorAll('.chosenSize_basket')[index];
        const formSize = document.createElement('form');
        formSize.className = "sizeFromBasker";
        formSize.dataset.idFormSize = index+1;
        size.map( (el) => {
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