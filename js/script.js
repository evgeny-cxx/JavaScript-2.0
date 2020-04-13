// fetch("http://getpost.itgid.info/index2.php")
//   .then((data) => data.text())
//   .then((data) => {
//     console.log(data);
//   });

fetch("http://getpost.itgid.info/index2.php", {
  method: "POST", // *GET, POST, PUT, DELETE, etc.
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
    // 'Content-Type': 'application/x-www-form-urlencoded',
  },
  redirect: "follow", // manual, *follow, error
  referrerPolicy: "no-referrer", // no-referrer, *client
  body: "!!!aut_key_code&action=1", // body data type must match "Content-Type" header
})
  .then((response) => response.text())
  .then((response) => {
    console.log(response);
  });
