const WRAPPER = document.getElementById('wrapper');

export const backToMainPage = () => {
    if (!document.querySelector('.buttonBackMain')) {
        const div = document.createElement('div');
        div.className = 'buttonBackMain'
        div.innerHTML = '⬅';
        document.querySelector('#root').prepend(div);
    }else {
        document.querySelector('.buttonBackMain').style.display = "block";
    }
    const div = document.querySelector('.buttonBackMain')
    div.addEventListener('click', backMain)
} 

const backMain = () => {
    document.querySelector('.container').remove();
    document.querySelector('.buttonBackMain').style.display = "none"
    WRAPPER.style.display = "block";
}