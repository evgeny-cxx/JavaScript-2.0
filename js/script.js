// window.addEventListener("storage", function (event) {
//   console.log("change");
//   document.querySelector(".out-1").textContent = localStorage.getItem("b1");
// });

// localStorage.setItem("data", 5);
// console.log(localStorage.getItem("data"));

// const a = [3, 4, 5];
// localStorage.setItem("a", JSON.stringify(a));
// let b = localStorage.getItem("a");
// b = JSON.parse(b);
// console.log(b);
// console.log(b[1]);
// console.log(typeof b);

// const c = {
//   hello: 5,
//   7: 8,
//   6: "hi",
// };
// localStorage.setItem("c", JSON.stringify(c));
// let d = localStorage.getItem("c");
// d = JSON.parse(d);
// console.log(d);
// console.log(typeof d);

///////// 1 ////////////

const t1 = () => {
  localStorage.setItem("5", 11);
  console.log(localStorage.getItem("5"));
};
document.querySelector(".b-1").onclick = t1;

///////// 2 ////////////
const a2 = [7, 6, 5];

const t2 = () => {
  localStorage.setItem("a2", JSON.stringify(a2));
  let g = localStorage.getItem("a2");
  g = JSON.parse(g);
  console.log(g);
};
document.querySelector(".b-2").onclick = t2;

///////// 3 ////////////

const t3 = () => {
  let g = localStorage.getItem("a2");
  g = JSON.parse(g);
  console.log(g);
  let out = "";
  for (let i = 0; i < g.length; i++) {
    out += i + ": " + g[i] + " <br>";
  }
  document.querySelector(".out-3").innerHTML = out;
};
document.querySelector(".b-3").onclick = t3;
