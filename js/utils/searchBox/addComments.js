import { FLIGHTS_ARRAY } from "../../arr/Flights.js";
import { createCommentsContainer } from "./createCommentsContainer.js";

export  const addComments = () => {
    if (localStorage.getItem("isLogin") == 'true'){
        if (event.target.previousSibling.previousSibling.value == 0){
            alert('Empty line')
        }else{
            const value = event.target.previousSibling.previousSibling.value;
            FLIGHTS_ARRAY[event.target.dataset.btnComId].comments.push(`${value}`)
            const container = event.target.parentNode.parentNode.parentNode.parentNode;
            createCommentsContainer(container)
        }
    }else {
        alert('Login in pleas')
    }
}