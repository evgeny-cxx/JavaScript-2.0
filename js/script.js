console.log("hello,word!!");
//let a = 55;
//let b = "cxx_BY";
//console.log(a + ' ' + b);
// document.getElementById('out').innerHTML = 'cxx';
let one = document.querySelector('#one');
let inputIn = document.querySelector('.inputIn');
let button = document.querySelector('button');

button.onclick = () => {
    console.log('WORK!!!');
    let b = inputIn.value;
    console.log(b);
    inputIn.value = '';
}

//// Задача 1 /////

let a = 7;
let b = 9;
console.log(a * b);

//// Задача 2 /////

let c = 7;
let d = 9;
console.log(c / d);

//// Задача 3 /////

let e = 3;
let f = 5;
console.log(e + f);