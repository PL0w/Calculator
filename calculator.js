let inputArea = document.querySelector('.calculator-input-area');
let textField = document.querySelector('.calculator-text-field');
let textFieldHistory = document.querySelector('.text-field-history');
let number = 0;
let number2 = 0;
let currentNumber = 0;
let sum;

// textField.textContent = 0;

inputArea.addEventListener('click', (e) => {
    target = event.target;
    let x;

    if (target.matches('.number')){
        x = getNumbers(target);
        addNumbersToNumber(x);
        convertNumber();
        updateTextField();
    }
    currentNumber = number;
    doPlus(target);
    doSubtract(target);
    doMultiply(target);
    doDivide(target);

    
    console.log(`X equals ${x}`);

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

function convertNumber(){
    number = Number(number);
}

function textFieldUpdate(){
    clearTextField();
    updateTextField();
    updateTextFieldHistory(currentNumber);
}


function doPlus(targ){
    if (target.matches('.plus')){
        console.log('plus');
        console.log(number);
        if (number > 0)
        {
            console.log('do you reafh me?');
            number2 += number;
            number = 0;
        }
        textFieldUpdate();
    }
}

function doSubtract(targ){
    if (target.matches('.subtract')){
        console.log('subtract');
        console.log(number);
        console.log('do you reafh me?');
        number2 -= number;
        number = 0;
        textFieldUpdate();
    }
}

function doMultiply(targ){
    if (target.matches('.multiply')){
        console.log('multiply');
        console.log(number);
        console.log('do you reafh me?');
        number2 *= number;
        number = 0;
        textFieldUpdate();
    }
}

function doDivide(targ){
    if (target.matches('.divide')){
        console.log('divide');
        console.log(number);
        console.log('do you reafh me?');
        number2 /= number;
        number = 0;
        textFieldUpdate();
    }
}

function addNumber(num){
    number += num;
}

function updateTextField() {
    // if (number2 > 0){
    //     textField.childNodes[0].textContent = number2;
    // }else{
    //     textField.childNodes[0].textContent = number;
    // }
    textField.childNodes[0].textContent = number;
}

//FIX THIS (eventually)
function updateTextFieldHistory(num){
    if (textFieldHistory.textContent == 0){
        textFieldHistory.textContent = num;
    }else if(target.matches('.plus')) {
        let x = Number(textFieldHistory.textContent);
        textFieldHistory.textContent = x + num;
    } else if(target.matches('.subtract')){
        let x = Number(textFieldHistory.textContent);
        textFieldHistory.textContent = x - num;
    } else if(target.matches('.multiply')){
        let x = Number(textFieldHistory.textContent);
        textFieldHistory.textContent = x * num;
    } else if(target.matches){
        let x = Number(textFieldHistory.textContent);
        textFieldHistory.textContent = x / num;
    }
}

function clearTextField() {
    textField.childNodes[0].textContent = '';
}