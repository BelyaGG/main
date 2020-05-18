export const createTotalMoney = () => {
    const liTotalSum = document.createElement('li');
    liTotalSum.className = "list-group-item d-flex justify-content-between";
    liTotalSum.innerHTML = `
        <span>Total (USD)</span>
        <strong class="totalSum"></strong>
    `;
    document.querySelector('.list-group').appendChild(liTotalSum);
}