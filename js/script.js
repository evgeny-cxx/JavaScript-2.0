const one = document.querySelector(".one");

one.style.width = "100px";
one.style.paddingBottom = "80px";

one.classList.add("two", "three");
one.classList.remove("three");

const toggle = document.querySelector(".toggle");

toggle.onclick = function() {
  this.classList.toggle("three");
};
const gas = document.querySelectorAll(".gas");
for (i = 0; i < gas.length; i++) {
  gas[i].onclick = function() {
    let gallons = document.querySelector(".gallons").value;
    let amount = this.getAttribute("data");
    let out = document.querySelector(".out");
    out.textContent = amount * gallons;
  };
}

let a = document.createElement("div");

a.innerHTML = "hello!";
a.classList.add("one");
a.onclick = function() {
  alert("Hello");
};

document.querySelector(".test").appendChild(a);

////// Задача 1 ////////

const button = document.querySelector(".b-1");
const out = document.querySelector(".out-1");

function f1() {
  out.style.width = "200px";
  out.style.heigth = "40px";
}

button.onclick = f1;

////// Задача 2 ////////

const button2 = document.querySelector(".b-2");
const out2 = document.querySelector(".out-2");

function f2() {
  out2.classList.add("bg-2");
}

button2.onclick = f2;

////// Задача 3 ////////

const button3 = document.querySelector(".b-3");
const out3 = document.querySelector(".out-3");

function f3() {
  out3.classList.remove("bg-3");
}

button3.onclick = f3;
