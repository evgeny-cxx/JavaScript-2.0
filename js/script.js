console.log("hello,word!!");
let a = 55;
let b = "cxx_BY";
console.log(a + ' ' + b);
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