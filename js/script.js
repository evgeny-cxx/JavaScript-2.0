// // document.querySelector(".i-1").oninput = function (event) {
// //   console.log(event);
// // };

// document.querySelector(".i-1").onkeypress = function (event) {
//   console.log("keypress");
//   console.log("charCode: " + event.charCode);
//   console.log("key: " + event.key);
//   console.log("keyCode: " + event.keyCode);
//   console.log("code: " + event.code);
//   // console.log(event);
// };

// document.querySelector(".i-1").onkeydown = function (event) {
//   console.log("keydown");
//   console.log("charCode: " + event.charCode);
//   console.log("key: " + event.key);
//   console.log("keyCode: " + event.keyCode);
//   console.log("code: " + event.code);
//   // console.log(event);
// };

// document.querySelector(".i-2").onkeypress = function (event) {
//   console.log("charCode: " + event.charCode);
//   console.log("key: " + event.key);
//   console.log(event);
//   const a = {
//     q: "w",
//     w: "e",
//   };
//   document.querySelector(".i-2").value = a[event.key];
//   return false;
// };

/////// Задача 1////////////

document.querySelector(".i-1").onkeypress = f1 = (event) => {
  return (document.querySelector(".out-1").textContent += event.key);
};

/////// Задача 2////////////

document.querySelector(".i-2").onkeypress = f2 = (event) => {
  return (document.querySelector(".out-2").textContent = event.keyCode + " , ");
};

/////// Задача 3////////////

document.querySelector(".i-3").onkeypress = f3 = (event) => {
  // console.log(event);
  if (event.keyCode > 57) {
    return (document.querySelector(".out-3").textContent = true);
  } else {
    return (document.querySelector(".out-3").textContent = false);
  }
};
