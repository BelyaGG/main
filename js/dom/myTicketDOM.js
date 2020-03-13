

export const myTicketDOM = () => {
    document.querySelector('.headerForm').style.display = "none";

    const info = document.createElement('div');
    info.className = 'info-container';
    info.innerHTML = `
        <div class="info-btns">
            <button class="info-ticket"> Active </button>
            <button class="info-histori"> Histori </button>
            <button class="info-basket"> Basket </button>
        </div>
        <div class="info-window">
            LALA
        </div>
    `

    document.querySelector('.header').appendChild(info);
}