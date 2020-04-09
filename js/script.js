document.querySelector(".one").onclick = (event) => {
  console.log(event);
  console.log("click");
};
document.querySelector(".two").ondblclick = () => {
  console.log("double");
};
document.querySelector(".two").oncontextmenu = () => {
  console.log("right button");
  return false; // не будет контекстное меню
};

let w = 75;
document.querySelector(".three").onmousemove = () => {
  document.querySelector(".three").style.width = w + "px";
  w++;
};

document.querySelector(".three").onmouseenter = () => {
  document.querySelector(".three").style.background = "red";
  console.log("1");
};

document.querySelector(".three").onmouseleave = () => {
  document.querySelector(".three").style.background = "green";
  console.log("2");
};

document.querySelector(".three").onmousedown = () => {
  document.querySelector(".three").style.background = "orange";
  console.log("3");
};

document.querySelector(".three").onmouseup = () => {
  document.querySelector(".three").style.background = "blue";
  console.log("4");
};

let p = 10;
document.querySelector("button").onclick = () => {
  p++;
  document.querySelector("progress").value = p;
};

///// Задача 1 /////////

document.querySelector(".div-1").onclick = () => {
  document.querySelector(".out-1").innerHTML = document.querySelector(
    ".div-1"
  ).innerHTML;
};

///// Задача 2 /////////

document.querySelector(".div-2").ondblclick = (event) => {
  console.log(event.altKey);
  document.querySelector(".out-2").innerHTML = "key alt press: " + event.altKey;
};

///// Задача 3 /////////
let wdt = 75;
document.querySelector(".div-3").onclick = () => {
  document.querySelector(".div-3").style.width = wdt + "px";
  wdt += 5;
  document.querySelector(".out-3").innerHTML = "ширина: " + wdt;
  console.log(wdt);
};
