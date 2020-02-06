let inputArea = document.querySelector('.calculator-input-area');
let textField = document.querySelector('.calculator-text-field');
let textFieldHistory = document.querySelector('.text-field-history');
let number = 0;
let number2 = 0;
let total = 0;
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
    doPlus(target);

    
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

function doPlus(targ){
    if (target.matches('.plus')){
        let numHistory = number;
        console.log('plus');
        console.log(number);
        if (number > 0)
        {
            console.log('do you reafh me?');
            number2 += number;
            number = 0;
        }
        clearTextField();
        updateTextField();
        updateTextFieldHistory(numHistory);
    }
}

function addNumber(num){
    number += num;
}

function addTotal(num){
    // if(num == 0){
    //     return undefined;
    // }
    total += num;
    updateTextField();
}

function updateTextField() {
    // if (number2 > 0){
    //     textField.childNodes[0].textContent = number2;
    // }else{
    //     textField.childNodes[0].textContent = number;
    // }
    textField.childNodes[0].textContent = number;
}
function updateTextFieldHistory(num){
    if (textFieldHistory.textContent == 0){
        textFieldHistory.textContent = num;
    }else {
        let x = Number(textFieldHistory.textContent);
        console.log(`X MXRKS THE SP${x}T`);
        textFieldHistory.textContent = x + num;
    }
}

function clearTextField() {
    textField.childNodes[0].textContent = '';
}