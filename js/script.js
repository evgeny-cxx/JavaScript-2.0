const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = ["a", "b", "c", "d", "e", "f"];
console.log(a);
console.log("shift=  " + a.shift("a"));

console.log(b);
console.log(a.length);
console.log(a.push(10, 11, 12));
console.log(a);

console.log(b.push("e", "j", "g"));
console.log(b);

console.log(b.pop());
console.log(b.pop());

delete a[3];
console.log(a);
a.splice(3, 4, "g");
console.log(a);

/////// Задача 1 ///////

const d1 = [33, "best", 66, "best"];
const button1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");
const input1 = document.querySelector(".i-1");

const showArr = (arr, out) => {
  out.innerHTML = arr;
};

function f1() {
  d1.push(input1.value);
  showArr(d1, out1);
}

button1.onclick = f1;

/////// Задача 2 ///////

const button2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");
function f2() {
  d1.pop();
  showArr(d1, out2);
}

button2.onclick = f2;

/////// Задача 3 ///////
const input3 = document.querySelector(".i-3");
const button3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");
function f3() {
  d1.unshift(input3.value);
  showArr(d1, out3);
}

button3.onclick = f3;

/////// Задача 4 ///////

const button4 = document.querySelector(".b-4");
const out4 = document.querySelector(".out-4");
function f4() {
  d1.shift();
  showArr(d1, out4);
}

button4.onclick = f4;
