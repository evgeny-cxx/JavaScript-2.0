// let a = -16;

// if (a > 9) {
//     console.log('Yes!');
// } else {
//     console.log('else');
// }

const button = document.querySelector("button");
const input = document.querySelector(".age");

button.onclick = () => {
  let num = +input.value;
  console.log(num);
  num >= 18 ? console.log("ACESS") : console.log("NO EXIT");

  //   if (num >= 18) {
  //     console.log("Yes!");
  //   } else {
  //     console.log("No!");
  //   }

  switch (num) {
    case 18:
      console.log("18");
      break;
    case 16:
      console.log("16");
      break;
  }
  //num = "";
};

/////// Задача 1 ////////

const but = document.querySelector(".b-1");
const inp = document.querySelector(".i-1");
const out = document.getElementById("out-1");

but.onclick = () => {
  let num = inp.value;
  num == 4 ? (out.innerHTML = "true") : (out.innerHTML = "false");
  num = "";
};

/////// Задача 2 ////////

const but2 = document.querySelector(".b-2");
const out2 = document.getElementById("out-2");

but2.onclick = () => {
  let a21 = +document.querySelector(".i-21").value;
  let a22 = +document.querySelector(".i-22").value;
  console.log(a21 + "  " + a22);
  a21 < a22 ? (out2.innerHTML = a22) : (out2.innerHTML = a21);
};


/////// Задача 3 ////////
