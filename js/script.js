let a = new Set();
a.add(12);
a.add(1);
a.add("word");
a.add(1);
a.add("1"); //===
// a.delete("word");
console.log(a);
console.log(a.length);
console.log(a.size);
console.log(a.has(1));
console.log(a.has(5));
for (let i of a) {
  console.log(i);
}
let arr = [1, 2, 3, 4, 5, "hello", 5, 4, 3, 2, 1, 55, 5];
let b = new Set(arr);
console.log(b);

/////// Задача 1 /////////

let s1 = new Set();
s1.add("h");
s1.add("b");
s1.add("o");
s1.add("h");
console.log(s1);

///// Задача 2 /////////
const b1 = document.querySelector(".b-1");
const in1 = document.querySelector(".i-1");
const out1 = document.querySelector(".out-1");
let s2 = new Set();

const f2 = () => {
  s2.add(in1.value);
  console.log(s2);
  return (out1.textContent = Array.from(s2));
};

b1.onclick = f2;

/////// Задача 3 /////////
const b3 = document.querySelector(".b-3");
const in3 = document.querySelector(".i-3");
const out3 = document.querySelector(".out-3");
let s3 = new Set([1, 2, 3, 4, 5, 6, 7]);
// s3.delete(1);
// console.log(s3);

function f3() {
  console.log(in3.value);
  let i = in3.value;
  s3.delete(+i);
  console.log(s3);
  return (out3.textContent = Array.from(s3));
}

b3.onclick = f3;
