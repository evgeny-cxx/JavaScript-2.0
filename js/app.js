let position = {
  cpu,
  memory,
};

// 'producer': "AMD",
// 'amount': 250.00,
// 'family': 'AMD Ryzen 7',
// 'name': 'Ryzen 7 3700X',
// 'image': ''

/*

*/
function drawProduct() {
  let elem = document.createElement("div");
  elem.className = "pricing-table row";
  let content = clone_product.content.cloneNode(true);
  elem.append(content);
  table_product.append(elem);
}

const buttonGetProduct = document.querySelector(".get-product");

function getProduct() {
  for (let key in position) {
    // console.log(key);
    // console.log(position[key]);
    console.log(`${key}: ${position[key].producer}`);
  }
}

buttonGetProduct.onclick = getProduct;
