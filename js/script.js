let user = {
  username: "Ivan",
  _password: "",
  set password(pass) {
    this._password = pass.trim(); // убирает пробелы вокруг пароля
  },
  get password() {
    return this.password;
  },
};

user.password = " hello ";
console.log(user);

// let user2 = {
//   username: "Ivan",
//   password: "qwerty",
// };

let user2 = {};
user2.__proto__ = user;

// console.log(user);
console.log(user2);
user2.password = "   123  334   ";
// console.log(user.username);
