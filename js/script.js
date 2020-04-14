let m = new Alert("hello", "alert-dark", ".out-1");
m.showAlert();

let v = new Alert("good", "alert-info", ".out-2");
v.showAlert();

let i = new Alert2("pp", "alert-success", ".out-3", "pets");
i.showIconAlert();

const name = document.querySelector(".package-name");
const count = document.querySelector(".disclaimer");
const price = document.querySelector(".price");

let goods = new Goods("YourPhone", 5, "phone", 1000);
console.log(goods);
goods.draw();
