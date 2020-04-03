const out = document.querySelector(".out");

let p = 0;
let flag = 3;
let str = "";

while (p < 4) {
  let p1 = 0;
  while (p1 < 4) {
    if (p1 < flag) {
      str += "";
    } else {
      str += "*";
    }
    p1++;
  }
  flag--;
  str += "<br>";
  p++;
}

out.innerHTML = str;

///// Задача 1 ///////
const out1 = document.querySelector(".out-1");
const button = document.querySelector(".b-1");

function t1() {
  let x = 0;
  let str = "";
  while (x <= 50) {
    str += x + " ";
    x++;
  }
  console.log(str);
  out1.innerHTML = str;
}

button.onclick = t1;

///// Задача 2 ///////
const out2 = document.querySelector(".out-2");
const button2 = document.querySelector(".b-2");

function t2() {
  let x = 0;
  let str = "";
  while (x <= 122) {
    str += x + " ";
    x += 2;
  }
  console.log(str);
  out2.innerHTML = str;
}

button2.onclick = t2;

///// Задача 3 ///////

const out3 = document.querySelector(".out-3");
const button3 = document.querySelector(".b-3");

function t3() {
  let x = 25;
  let str = "";
  while (x >= 7) {
    str += x + " ";
    x--;
  }
  console.log(str);
  out3.innerHTML = str;
}

button3.onclick = t3;
