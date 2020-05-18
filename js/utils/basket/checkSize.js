export const checkSize = () => {
    if (document.querySelector('.NoSelSize')){
        document.querySelector('.NoSelSize').style.display = "none";
    }
    const allFromSize = document.querySelectorAll('.sizeFromBasker');
    if ( allFromSize.length > 0){
        document.querySelector('.NoSelSize').style.display = "block";
        return false;
    } else {
        return true;
    }
}