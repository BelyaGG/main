import { mainDOM } from './dom/mainDOM.js'
import {addFormSubmitEvent} from './utils/addFormEvent.js'
import {createForm} from './dom/createFormRegister.js'


if (!localStorage.getItem("isValidationRequired")) {
  createForm();
  addFormSubmitEvent();
} else {
  alert("СИСТЕМА ВАС ЗАПОМНИЛА, ВХОД УСПЕШЕН");
  mainDOM();
}

