export const createFormSize = (size) => {
    const sizeFrom = document.querySelector('.sizeFrom');
    size.map(( el ) => {

        const inputSize = document.createElement('input');
        inputSize.type = 'checkbox';
        inputSize.id = `${el}`;
        inputSize.name = 'size';
        inputSize.value = `${el}`;

        const labelSize = document.createElement('label');
        labelSize.for = `${el}`;
        labelSize.innerHTML = `${el}`;

        sizeFrom.appendChild(inputSize);
        sizeFrom.appendChild(labelSize);
    })

}