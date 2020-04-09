////// Задача 1 //////////
const a1 = [1, 2, 3, 4, 5];

const but1 = document.querySelector(".b-1");
const out1 = document.querySelector(".out-1");

const f1 = () => {
  let str = "";
  for (let i = 0; i < a1.length; i++) {
    str += a1[i] + " ";
  }
  console.log(str);
  out1.textContent = str;
};

but1.onclick = f1;

////// Задача 2 //////////

const but2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");

const f2 = () => {
  let str = "";
  for (let i in a1) {
    str += i + ":" + a1[i] + " " + "<br>";
  }
  console.log(str);
  out2.innerHTML = str;
};

but2.onclick = f2;

////// Задача 3 //////////

const but3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");
let item = document.getElementsByClassName("out-3");

const f3 = () => {
  console.log(item);
  for (let i of item) {
    i.textContent = 3;
  }
};

but3.onclick = f3;
