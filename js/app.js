let position = {
  cpu,
  memory,
  hdd
};

// 'producer': "AMD",
// 'amount': 250.00,
// 'family': 'AMD Ryzen 7',
// 'name': 'Ryzen 7 3700X',
// 'image': ''

/*

*/
function createCardProduct(position) {
  let div = document.createElement("div");
  div.className = `${position} pricing-table row`;
  let content = clone_product.content.cloneNode(true);
  div.append(content);
  table_product.append(div);
}



function setProductCard(producer, amount, family, name, image) {
  let producerShow = document.querySelector(".producer");
  let amountShow = document.querySelector(".amount");
  let familyShow = document.querySelector(".family");
  let nameShow = document.querySelector(".name");
  let imageShow = document.querySelector(".image");
  producerShow.innerHTML = producer;
  amountShow.innerHTML = amount;
  familyShow.innerHTML = family;
  nameShow.innerHTML = name;
  imageShow.innerHTML = `<i class="material-icons">${image}</i>`;
}

const buttonGetProduct = document.querySelector(".get-product");

function getProduct() {
  for (let key in position) {
    console.log(`${key}: ${position[key].producer}`);
    // let producer = position[key].producer;
    // let amount = position[key].amout;
    // let family = position[key].family;
    // let name = position[key].name;
    // let image = position[key].image;
    // createCardProduct(key);
    setProductCard(position[key].producer,
      position[key].amout,
      position[key].family,
      position[key].name,
      position[key].image);
  }
}

buttonGetProduct.onclick = getProduct;