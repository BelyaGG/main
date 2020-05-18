export const checkInform = () => {
    const form = document.querySelector('.needs-validation');
    if (form.fname.value == "") { 
        form.fname.style.borderColor = 'red';
        form.fname.focus();
        return false
    } else {
        form.fname.style.borderColor = '#ced4da';
    }
    if (form.lname.value == "") {
        form.lname.style.borderColor = 'red';
        form.lname.focus();
        return false
    }else {
        form.lname.style.borderColor = '#ced4da';
    }
    if (form.address.value == ""){
        form.address.style.borderColor = 'red';
        form.address.focus();
        return false
    }else {
        form.address.style.borderColor = '#ced4da';
    }
    if (form.phone.value == ''){
        form.phone.style.borderColor = 'red';
        form.phone.focus();
        return false 
    }else{
        form.phone.style.borderColor = "#ced4da";
    }
    if (form.country.value < 1){
        form.country.style.borderColor = 'red';
        return false
    }else {
        form.country.style.borderColor = '#ced4da';
    }
    if (form.state.value  < 1) {
        form.state.style.borderColor = 'red';
        return false
    }else {
        form.state.style.borderColor = '#ced4da';
    }
    return true;
}