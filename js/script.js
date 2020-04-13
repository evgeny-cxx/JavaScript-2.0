let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    myFunc(data);
  }
};

xhttp.open(
  "GET",
  "http://getpost.itgid.info/index2.php?auth = !!!KEY_CODE&action=1", /// auth = !!!KEY_CODE - curent code auth!!
  true
);
xhttp.send();

function myFunc(data) {
  console.log(data);
}

let xhttp2 = new XMLHttpRequest();

xhttp2.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    myFunc2(data);
  }
};

xhttp2.open("POST", "http://getpost.itgid.info/index2.php", true);
xhttp2.setRequestHeader("Contetn-type", "aplication/x-www-form-urlecoded");
xhttp2.send("auth = !!!KEY_CODE&action =1");
