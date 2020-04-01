/////// Задача 1 /////////

const button = document.querySelector('.b-1');
const output = document.getElementById('out-1');

button.onclick = () => {
    let out = '';
    for (let i = 1; i <= 50; i++) {
        out += i + ' ';
    }
    output.innerHTML = out;
};

/////// Задача 2 /////////

const butt = document.querySelector('.b-2');
const out = document.getElementById('out-2');

butt.onclick = () => {
    let out2 = '';
    for (let i = 2; i <= 122; i += 2) {
        out2 += i + ' ';
    }
    out.innerHTML = out2;
};

/////// Задача 3 /////////

const but = document.querySelector('.b-3');
const outt = document.getElementById('out-3');

but.onclick = () => {
    let out2 = '';
    for (let i = 25; i >= 7; i--) {
        out2 += i + ' ';
    }
    outt.innerHTML = out2;
};