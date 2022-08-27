// super oldscholl but still working
// also array like object
const form = document.forms[0];
const box = document.querySelector('.box');
// querySelector este o metoda care exista pe TOATE elmentele
// de DOM, document, fiind element de DOM si el
// evident o are, dar:
const colorInput = form.querySelector('.color');
// astfel, cautam direct in formular,
// alte elemnete cu clasa .color, nu ne-ar incurca

// event delegation
form.addEventListener('click', (event) => {
  // evenimentul pleaca de pe oricare button
  // urca in sus spre document
  // trece prin form, aici unde avem eventListener
  // si va fi evaluat:
  // de data asta folosim event.target
  // nu ne interseaza currentTarget, pentru ca e formul
  const element = event.target;

  // daca elementul NU este buton
  // sau daca nu are un atribut data-color
  // cu lungime mai mare de 0
  // lasam evenimentul sa treaca mai departe
  // prin early return
  if (element.nodeName !== 'BUTTON' || element.dataset.color.length <= 0) {
    return;
  }
  const button = element;
  const color = button.dataset.color;
  // suprascriem box, cu labelul curent selectat
  // fiind variabila locala, nu interfereaza cu
  // box de afara
  const checkedInput = document.querySelector('.box-container input:checked');
  // more DOM traversal, urcam pe parinte, care este label.box
  const box = checkedInput.parentElement;

  box.style.backgroundColor = color;
});

// am schimbat din eventul 'change'
// in eventul 'input'
colorInput.addEventListener('input', (event) => {
  // nu avem event delegation, deci ne ajuta
  // event.currentTarget, -> elementul pe care am rulat
  // addEventListener
  const colorInput = event.currentTarget; // no destructure
  // dom traversal spre butonul care e imediat langa
  const dynamicButton = colorInput.nextElementSibling;
  const colorValue = colorInput.value;

  //mini validare
  if (colorValue.length <= 0) {
    return;
  }

  dynamicButton.style.backgroundColor = colorValue;
  dynamicButton.dataset.color = colorValue;
});
