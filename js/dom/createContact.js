import { createHeader } from './DOMheader.js';
import { createFooterDOM } from './DOMfooter.js';


const WRAPPER = document.querySelector('#wrapper');

export const createContact = (event) => {
    WRAPPER.innerHTML = ``;
    event.preventDefault()

    createHeader();
    
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="contact_div">
            <div class="contact_map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d501.94653946060674!2d30.92056124636059!3d52.40504671258208!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sby!4v1582574150433!5m2!1sru!2sby" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </div>
            <div class="contact_inform">
                <div class="contacts-map-popup-main">
                    <div class="logotitle">ADITI</div>
                        <div class="contactinfo">
                        <div class="dd adr">
                            г. Гомель, Советская, д. 17, стр. 1, оф. 1000<br>                        
                        </div>
                        <div class="dd metro __line5">ЦИРК</div>
                        <div class="dd soc-call-wrapper">
                            <a href="" class="soc-call-buttons _whatsapp">Whatsapp</a>
                        </div>
                        <div class="dt">Отдел продаж</div>
                        <div class="dd">Ежедневно с 9:00 до 21:00</div>
                        <div class="dd tel"><a href="#">8 029 577 90 85</a></div>
                        <div class="dt">По вопросам сотрудничества:</div>
                        <div class="dd"><a href="#">kadadssag@gmail.com</a></div>
                    </div>
                </div>
            </div>
        </div>
    `

    WRAPPER.appendChild(div);

    createFooterDOM();
}
