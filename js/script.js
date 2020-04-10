/////// 1 ////////
document.querySelector(".block-1").addEventListener("touchstart", handleStart);

function handleStart(event) {
  console.log("+");
  console.log(event);
  document.querySelector(".out-1").textContent += "touch" + " ";
}

/////// 2 ////////
document.querySelector(".block-2").addEventListener("touchstart", handleStart2);
let x = 0;
function handleStart2(event) {
  console.log("+");
  console.log(event);
  x += +event.touches.length;
  console.log(x);
  document.querySelector(".out-2").innerHTML = x;
}
/////// 3 ////////
document
  .querySelector(".block-3_1")
  .addEventListener("touchstart", handleStart3);

document
  .querySelector(".block-3_2")
  .addEventListener("touchstart", handleStart3);

function handleStart3(event) {
  console.log("+");
  console.log(event);
  document.querySelector(".out-3").textContent = event.target.outerText;
}
