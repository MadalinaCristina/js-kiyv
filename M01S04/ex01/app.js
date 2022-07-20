var value = window.prompt('Introdu o valoare');
var message = '';
var number = window.prompt('Cu ce numar compar?');

value = Number(value);
number = Number(number);

if (isNaN(value) === true) {
  message = 'Nu ai introdus un numar';
} else if (value === number) {
  message = `Numarul ${value} este egal cu ${number}`;
} else if (value > number) {
  message = `Numarul ${value} este mai mare decat ${number}`;
} else {
  message = `Numarul ${value} este mai mic decat ${number}`;
}

var messageParagraph = document.getElementById('message');
messageParagraph.innerText = message;
