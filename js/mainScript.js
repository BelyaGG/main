import { mainDOM } from './dom/mainDOM.js'
import {addFormSubmitEvent} from './utils/addFormEvent.js'
import {createForm} from './dom/createFormRegister.js'
import { btnMainPage } from './utils/btnMainPage.js'

 if (!localStorage.getItem("isValidationRequired")) {
  createForm();
  addFormSubmitEvent();
  btnMainPage();
} else {
  alert("СИСТЕМА ВАС ЗАПОМНИЛА, ВХОД УСПЕШЕН");
  mainDOM();
}



