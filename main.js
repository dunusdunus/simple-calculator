const numberBtn = document.querySelectorAll('.number'); // кнопки с номерами
const numberArea = document.getElementById('input'); // инпут калькулятора
const btnPlus = document.querySelector('.btn__plus'); // кнопка плюс
const btnMinus = document.querySelector('.btn__minus'); // кнопка минус
const btnMultiply = document.querySelector('.multiplication'); // кнопка умножения
const btnDivision = document.querySelector('.division'); // кнопка деления
const clearBtn = document.querySelector('.clear'); // кнопка сброса
const resultBtn = document.querySelector('.btn__result'); // кнопка равно

rememberNumbers = []; // пустой массив

let isPlusActive = false;
let isMinusActive = false;
let isMultiplyActive = false;
let isDivisionActive = false;

// цикл, который позволяет получать значение нажатой цифры и записывать его в инпут
for (let i=0; i<numberBtn.length; i++) {
    numberBtn[i].addEventListener('click', clickNumber); // тут все понятно
    
    function clickNumber() {
        let num = numberBtn[i].textContent; // переменная в которую записывается значение нажатой цифры
        
        if (numberArea.value === '0') { // условие (если значение 0 или нажат "+", сбрасывай значение в инпуте и прибавляй новое к существующему)
            numberArea.value = '';
            numberArea.value += num;
        } else {
            numberArea.value += num;
        }
    }
}

btnPlus.addEventListener('click', addNumbers); // событие клика на плюс
function addNumbers() {
    rememberNumbers.push(numberArea.value);
    isPlusActive = true;
    numberArea.value = '0';
}

btnMinus.addEventListener('click', subtractNumbers); // событие клика на минус
function subtractNumbers() {
    rememberNumbers.push(numberArea.value);
    isMinusActive = true;
    numberArea.value = '0';
}

btnMultiply.addEventListener('click', multiplyNumbers); // событие клика на уможение
function multiplyNumbers() {
    rememberNumbers.push(numberArea.value);
    isMultiplyActive = true;
    numberArea.value = '0';
}

btnDivision.addEventListener('click', divisionMumbers); // событие клика на деление
function divisionMumbers() {
    rememberNumbers.push(numberArea.value);
    isDivisionActive = true;
    numberArea.value = '0';
}

clearBtn.addEventListener('click', clearNumbers) // событие клика на очистку инпута
function clearNumbers() {
    rememberNumbers = [];
    numberArea.value = '0';
    isPlusActive = false;
    isMinusActive = false;
    isMultiplyActive = false;
    isDivisionActive = false;
}


resultBtn.addEventListener('click', showResult); // событие клика на равно
function showResult() {
    if (isPlusActive) {
        numberArea.value = Number(rememberNumbers[rememberNumbers.length - 1]) + Number(numberArea.value);
        isPlusActive = false;
    } else if (isMinusActive) {
        numberArea.value = Number(rememberNumbers[rememberNumbers.length - 1]) - Number(numberArea.value);
        isMinusActive = false;
    } else if (isMultiplyActive) {
        numberArea.value = Number(rememberNumbers[rememberNumbers.length - 1]) * Number(numberArea.value);
        isMultiplyActive = false;
    } else if (isDivisionActive) {
        numberArea.value = Number(rememberNumbers[rememberNumbers.length - 1]) / Number(numberArea.value);
        isDivisionActive = false;
    }
}