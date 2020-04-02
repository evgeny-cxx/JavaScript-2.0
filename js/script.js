////// Задача 1 ///////

let a1 = 8;

function t1() {
    document.querySelector('.out-1').innerHTML = a1;
}

document.querySelector('.b-1').onclick = t1;

////// Задача 2 ///////

let a2 = 8;

function t2() {
    return a2;
};
document.querySelector('.b-2').onclick = function () {
    document.querySelector('.out-2').textContent = t2();
};

// ////// Задача 3 ///////

function t3(a, b) {
    return a * b;
}
document.querySelector('.b-3-1').onclick = function () {
    document.querySelector('.out-3-1').textContent = t3(3, 4);
}
document.querySelector('.b-3-2').onclick = function () {
    document.querySelector('.out-3-2').textContent = t3(5, 6);
}


// Основы работы с пользовательскими функциями в JavaScript //
// Сделайте функцию, выводящую на экран ваше имя.

const inName = document.querySelector('.name');
const outName = document.querySelector('.name-out');
const button = document.querySelector('.run');

button.onclick = () => {
    outName.textContent = inName.value;
};

// Сделайте функцию, выводящую на экран сумму чисел от 1 до 100.

const summOut = document.querySelector('.summa');

const sumFunc = (a, b) => {
    let x = 0;
    if (a > b)[a, b] = [b, a];
    for (let i = a; i <= b; i++) {
        x += i;
    }
    return x;
};

summOut.textContent = sumFunc(100, 1);




function func(num1, num2) {
    return num1 > 0 && num2 > 0 ? num1 * num2 : num1 - num2;
};

alert(func(3, 4));