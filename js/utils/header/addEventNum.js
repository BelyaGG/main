import { selectNum } from './selectNum.js'

export const addEventNum = () => {
    const arr = [...document.querySelectorAll('.inputBasketNum')]
    arr.map ((el)=> {
        el.addEventListener('blur', selectNum)
    })
}
