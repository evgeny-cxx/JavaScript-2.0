////// Задача 1 ///////

const output = document.querySelector('.out');

for (i = 0; i < 3; i++) {
    let z = '';
    for (k = 0; k < 3; k++) {
        z += "*";
    }
    output.innerHTML += z + "_";
};

////// Задача 2 ///////

const output1 = document.querySelector('.out1');

for (i = 1; i <= 3; i++) {
    let z = '';
    for (k = 0; k < 3; k++) {
        z += `*_`;
    }
    output1.innerHTML += `${i} <br> ${z} <br>`;
};

////// Задача 3 ///////

const output2 = document.querySelector('.out2');

for (i = 0; i <= 3; i++) {
    let z = '';
    for (k = 0; k < 3; k++) {
        z += `*_`;
    }
    output2.innerHTML += `${z} <br>`;
};