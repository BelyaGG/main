import {addFormSubmitEvent} from '../addFormEvent.js';
import {createForm} from '../../dom/createFormRegister.js';
import { btnMainPage } from '../btnMainPage.js';

const WRAPPER = document.getElementById('wrapper');

export const myTicketsEvent = () => {
    const isLogin = localStorage.getItem('isLogin')
    if ( isLogin === 'true') {
        
        if (getComputedStyle(document.querySelector('.headerForm')).display === 'flex' ){
            document.querySelector('.headerForm').style.display = "none";
            document.querySelector('.info-container').style.display = "flex";
        } else {
            document.querySelector('.headerForm').style.display = "flex";
            document.querySelector('.info-container').style.display = "none";
        }

    }else {
        WRAPPER.innerHTML = '';

        createForm();
        addFormSubmitEvent();
        btnMainPage();
    }
}