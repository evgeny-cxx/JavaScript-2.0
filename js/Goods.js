/*
 *const name = document.querySelector(".package-name");
 *const count = document.querySelector(".disclaimer");
 *const price = document.querySelector(".price");
 */

class Goods {
  constructor(name, amout, image, count) {
    this.name = name;
    this.amout = amout;
    this.image = image;
    this.count = count;
  }
  draw() {
    name.innerHTML = `<i class="material-icons">${this.image}</i> ${this.name}`;
    count.innerHTML = `осталось ${this.count}`;
    price.innerHTML = `$ ${this.amout}`;
  }
}
