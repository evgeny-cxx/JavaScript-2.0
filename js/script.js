// let a = 'Ivan';
// let b = '7773333';

// const person = new User(a, b);
// console.log(person);
// console.log(person.validatePassword());

// let firstStudent = new Student(a, b, '123');
// console.log(firstStudent);

let but = new Button(100, 50, 'red', 'push');

console.log(but);

document.body.append(but.render());
console.log(but.render());
let modBut = new ModernButton(100, 50, 'yellow', 'modd', 20);
console.log(modBut.render());
document.body.append(modBut.render());