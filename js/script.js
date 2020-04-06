const a = {
  a: 5,
  b: "hello",
  z2: "Hi",
};

a.yy = 5555;
a.b = 77;
delete a.z2;
console.log(a);

let k = "z2";
console.log(a[k]);

let out = "";
for (let key in a) {
  out += `${key} -- ${a[key]} <br>`;
}

document.querySelector(".out").innerHTML = out;

////// Задача 1 ////////
let a1 = {
  one: 15,
  two: 16,
  five: 20,
};

function f1() {
  let out = "";
  for (let key in a1) {
    if (key == "two") {
      out += a1[key];
    }
  }
  return (document.querySelector(".out-1").innerHTML = out);
}

document.querySelector(".b-1").onclick = f1;

////// Задача 2 ////////
let a2 = {
  one: "hello",
  two: "mahai",
  five: "hi",
};

function f2() {
  let out = "";
  for (let key in a2) {
    if (a2[key] == "hi") {
      out += a2[key];
    }
  }
  return (document.querySelector(".out-2").innerHTML = out);
}

document.querySelector(".b-2").onclick = f2;
