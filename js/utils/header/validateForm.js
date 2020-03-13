export const validateForm = (el) => {
    if (el.value.length < 1 ){
        el.style.border = "1px solid red";
        return false
    }
    el.style.border = "0px";
    return true
}