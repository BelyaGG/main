
export const checkedPayment = () => {
    const input = document.getElementsByName('paymentMethod');
    let arr = [];
    arr = [...input];
    arr.map( (el) => {
        el.addEventListener('click', activPayment)
    })

}

const activPayment = () => {
    const input = document.getElementsByName('paymentMethod');
    if(input[0].checked) {
        document.querySelector('.credit_card_activ').style.display = "block";
    } else if (input[1].checked){
        document.querySelector('.credit_card_activ').style.display = "none";
    }
}