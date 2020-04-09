let a = [4, 5, 12, 200, 1, 0, -2];

let b = a.map((item, index) => {
  // console.log(item);
  return item * 5;
});

console.log(b);

let c = a.filter((item) => (item > 0 ? true : false));
console.log(c);

/////// Задача 1 ////////////
const a1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11];
console.log(a1);
const f1 = () => {
  let a1_res = a1.map((item) => item * 2);
  console.log(a1_res);
};

f1();

/////// Задача 2 ////////////
const a2 = [2, 3, 4, 5, 10, 11, 12];
console.log(a2);
const f2 = () => {
  let a2_res = a2.map((item) => item ** 2);
  console.log(a2_res);
};

f2();

/////// Задача 3 ////////////
const a3 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11];
console.log(a3);
const f3 = () => {
  let a3_res = a3.filter((item) => {
    if (item === +item) return item;
  });
  console.log(a3_res);
};

f3();
