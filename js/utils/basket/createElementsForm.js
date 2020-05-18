

export const createElementsForm = (el) => {
    const formSize = document.querySelector('.form')

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
}