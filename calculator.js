let inputArea = document.querySelector('.calculator-input-area');
let textField = document.querySelector('.calculator-text-field');
let number = 0;
let number2 = 0;
let total = 0;
let sum;

textField.textContent = 0;

inputArea.addEventListener('click', (e) => {
    target = event.target;
    let x = 0;
    x = getNumbers(target);
    
    console.log(`X equals ${x}`);
    addNumbersToNumber(x)
    numberToTextField();
    doPlus(target);
})

function getNumbers(targ){
    if (targ.matches('.number')){
        console.log('number');
        let num = target.textContent;
        console.log(`number is ${num}`);
        return num;
    }
}

function addNumbersToNumber(num){
    if (number == 0)
    {
        number = num;
    } else {
        number += num;
    }
}

function doPlus(targ){
    if (target.matches('.plus')){
        console.log('plus');
    }
}

function addNumber(num){
    number += num;
}

function numberToTextField(){
    clearTextField();
    textField.textContent = number;
}

function addTotal(num){
    // if(num == 0){
    //     return undefined;
    // }
    total += num;
    updateTextField();
}

function updateTextField() {
    textField.textContent = number;
}

function clearTextField() {
    textField.textContent = '';
}