let a = "hello, hi, word";
console.log(a.split(","));

let b = [8, 9, 7];
console.log(b.join("-"));

b.forEach(function (item, index) {
  console.log(item);
  console.log(index);
  console.log("--");
});

//////// Задача 1 ///////////
const a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];

const t1 = () => {
  const a1_res = [];
  a1.forEach((item, index) => {
    a1_res[index] = item * 2;
  });
  console.log(a1_res);
};

t1();

//////// Задача 2 ///////////
const a2 = [2, 3, 4, 5, 10, 11, 12];

const t2 = () => {
  const a2_res = [];
  a2.forEach((item, index) => {
    a2_res[index] = item / 2;
  });
  console.log(a2_res);
};

t2();

//////// Задача 3 ///////////
const a3 = [2, "hello", 3, "hi", 4, "Mazai"];

const t3 = () => {
  const a3_res = [];
  a3.forEach((item, index) => {
    if (item === +item) a3_res[index] = item / 2;
  });
  console.log(a3_res);
};

t3();

//////// Задача 3 ///////////
const a4 = "hello world and rossony";

const t4 = () => {
  let a4Arr = a4.split(" ");
  let arrOut = [];
  console.log(a4Arr);
  for (let item of a4Arr) {
    let x = "";
    x += item[0].toUpperCase();
    for (let i = 1; i < item.length; i++) {
      x += item[i];
    }
    arrOut += x + " ";
  }
  console.log(arrOut);
};

t4();
