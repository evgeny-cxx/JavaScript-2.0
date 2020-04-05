const a = [1, 2, 3];
const b = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//console.log(b);

// for (let i = 0; i < b.length; i++) {
//   c = b[i];
//   for (let k = c.length - 1; k >= 0; k--) {
//     console.log(c[k]);
//   }
// }
let out = "";

for (let i = 0; i < b.length; i++) {
  out += "<br>";
  for (let k = 0; k < b[i].length; k++) {
    // console.log(b[i][k]);
    out += b[i][k] + " ";
  }
}
document.querySelector(".out").innerHTML = out;
/////////////////

let d = ["X", 0, 0, 0, 0, 0];
let k = 0;
let j = d.length - 1;
document.querySelector(".out-arr").innerHTML = d.join(" ");

document.querySelector(".but-arr").onclick = () => {
  if (k < j) {
    d[k] = 0;
    d[k + 1] = "X";
    k++;
  } else {
    d[j] = 0;
    d[j - 1] = "X";
    j--;
  }
  if (j == 0) {
    k = 0;
    j = d.length - 1;
  }
  document.querySelector(".out-arr").innerHTML = d.join(" ");
};

///// Задача 1 /////

const input = document.querySelector(".in-1");
const button = document.querySelector(".b-1");
const output = document.querySelector(".out-1");

function isNum(element, index, arr) {
  if (element == 55) {
    return element;
  } else {
    return false;
  }
}

function f1() {
  const str = input.value;
  const arr = str.split(",");
  output.innerHTML = arr.find(isNum);
  console.log(arr.find(isNum));
}

button.onclick = f1;
