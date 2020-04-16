let a = {
    'text': 'Hello',
    'color': 'red',
    'bold': true,
    'show': function () {
        console.log(this.color);
    }
};

let b = {
    'fontSize': '24px',
    __proto__: a
}

// console.log(a);
// console.log(b);
// b.text = 'one';

// console.log(b.text);
// console.log(a.text);

// b.color = 'green'; //если не присваивать цвет, то наследует от родителя а!!
// b.show();

// let c = {
//     'fontFamily': 'Roboto',
//     __proto__: b
// }

// console.log(c);
// console.log(c.bold);

///////// 1 /////////////

// app, cpu, memory obj/