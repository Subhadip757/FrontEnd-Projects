const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let count = document.getElementById('count')

let number = 0

plusBtn.addEventListener('click',()=>{
    number++
    count.innerHTML = number
})
minusBtn.addEventListener('click',()=>{
    number--
    count.innerHTML = number
})