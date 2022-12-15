'use strict';

///////////////////////////////////////
const button = document.getElementById('theme');
button.addEventListener('click', (e) => {
    document.body.classList.toggle('theme')
})
// =================== 1 ==================================
const btn = document.getElementById('btn');
btn.addEventListener('click', (e) => {
    const text = document.getElementById('input1').value;
    const input_1 = text.toLowerCase();
    const param = document.getElementById('param');
    if (input_1 === 'ishchi') {
        param.innerHTML = 'Hello✋';
    } else if (input_1 === 'direktor') {
        param.innerHTML = 'Greating🧔';
    } else if (input_1 === "") {
        param.innerHTML = 'No login😢';
    } else {
        param.innerHTML = 'Bunday lavozim mavjud emas🤷‍!'
    }
})
// =================== 2 =================================
const btnTwo = document.getElementById('btnTwo');
btnTwo.addEventListener('click', (e) => {
    const dateOne = document.getElementById('dateOne').value;
    const dateTwo = document.getElementById('dateTwo').value;
    const paramTwo = document.getElementById('paramTwo');

    const date_1 = new Date(dateOne);
    const date_2 = new Date(dateTwo);
    const result = date_2 - date_1;
    const sum = result / (1000 * 60 * 60 * 24)
    paramTwo.innerHTML = sum;
})
// =================== 3 ================================== Tugalanmagan
const number = document.getElementById('number');
number.addEventListener('input', (e) => {
    const paramThere = document.getElementById('paramThere');
    const result = +e.target.value
    let up = Math.floor(result / 10);
    let low = result % 10;
    let arr = Math.ceil(result / 10)
    let nums;

    switch (up) {
        case 1:
            nums = "O'n";
            break;
        case 2:
            nums = "Yigirma";
            break;
        case 3:
            nums = "O'ttiz";
            break;
        case 4:
            nums = "Qiriq";
            break;
        case 5:
            nums = "Elik";
            break;
        case 6:
            nums = "Oltimish";
            break;
        case 7:
            nums = "Yetmish";
            break;
        case 8:
            nums = "Sakson";
            break;
        case 9:
            nums = "To'qson";
            break;
    }
    let num;
    switch (low) {
        case 0:
            num = 'nol';
            break;
        case 1:
            num = "bir";
            break;
        case 2:
            num = "ikki";
            break;
        case 3:
            num = "uch";
            break;
        case 4:
            num = "to'rt";
            break;
        case 5:
            num = "besh";
            break;
        case 6:
            num = "olti";
            break;
        case 7:
            num = "yetti";
            break;
        case 8:
            num = "sakkiz";
            break;
        case 9:
            num = "to'qqiz";
            break;
    }
    if (result == 10) {
        paramThere.innerHTML = "o'n"
    } else if (arr == 1) {
        paramThere.innerHTML = num;
    } else if (up == 0) {
        paramThere.innerHTML = nums;
    } else if (low == 0) {
        paramThere.innerHTML = nums;
    } else {
        paramThere.innerHTML = nums + " " + num;
    }
})
// =================== 4 ==================================
function func() {
    const myNum = [3, 5, 34, 12, 53, 8, 23, 21, 3, 65, 24];
    const paramFour = document.getElementById('paramFour');
    let arr = 0;
    for (let i = 0; i < myNum.length; i++) {
        const sum = myNum[i] * 3;
        arr += sum
        paramFour.innerHTML = arr;
    }
}
func()

// =================== 5 ==================================
function myArr() {
    const myMass = [2, 4, 5, 7, 7, 8, 12, 56];
    const myMassiv = [3, 4, 5, 7, 23, 12, 45, 32];
    const result = [];
    for (let i = 0; i < myMass.length; i++) {
        const sum = `${myMass[i] + myMassiv[i]}`;
        result.push(sum)
        document.getElementById('paramFive').innerHTML = `[${result.join(', ')}]`;
    }
}
myArr();
// =================== 6 ================================== ISHLAMADI
// ////    HTML ni o'zida bajarilgan
// =================== 7 ==================================
const form = document.getElementById('form');
form.addEventListener('click', (e) => {
    e.preventDefault();
});
// =================== 8 ==================================
const btnEight = document.getElementById('btnEight');
btnEight.addEventListener('click', (e) => {
    const inputEight = +document.getElementById('inputEight').value;
    const myArray = [23, 32, 12, 21, 3, 76, 87];
    const paramEight = document.getElementById('paramEight');
    for (let i = 0; i < myArray.length; i++) {
        if (inputEight === myArray[i]) {
            delete myArray[i];
        }
    }
    paramEight.innerHTML = `[${myArray.join(' ')}]`;

    console.log(myArray)
});
// =================== 9 ================================== TUGALANMAGAN
const inputNine = document.getElementById('inputNine');
inputNine.addEventListener('change', (e) => {
    let myInput =  inputNine.value
    const paramNine = document.getElementById('paramNine')
    const param = document.createElement('p');
    param.innerHTML = myInput;
    paramNine.appendChild(param);
    console.log(param)
})
