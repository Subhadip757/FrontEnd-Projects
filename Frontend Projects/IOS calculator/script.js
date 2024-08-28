let userInput = document.getElementById('display');
let expression = '';

function calc(num){
    expression += num;
    userInput.value = expression;
}

function equal(){
    userInput.value = eval(expression)
    expression = '';
}

function erase(){
    expression = '';
    userInput.value = expression;
}
function neg() {
    if (userInput.value === '' || userInput.value === '0') {
        return;
    } else {
        let number = parseFloat(userInput.value);
        expression = -number;
        userInput.value = expression;
    }
}

