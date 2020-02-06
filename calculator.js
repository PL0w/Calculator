let inputArea = document.querySelector('.calculator-input-area');
let textField = document.querySelector('.calculator-text-field');
let total = 0;
let sum;

textField.textContent = 0;

inputArea.addEventListener('click', (e) => {
    target = event.target;
    if (target.matches('.number') && !(target.matches.textContent == '0')){
        console.log('number reached');
        let num = target.textContent;
        addTotal(num);
        console.log(total);
    }

    if (target.matches('plus')){

    }
})

function addTotal(num){
    if(num == 0){
        return undefined;
    }
    clearTextField();
    updateTextField();
    return total += num;
}

function updateTextField() {
    textField.textContent = total;
}

function clearTextField() {
    textField.textContent = ' ';
}