// ca si la jQ, un array like object:
const image = document.getElementsByClassName('image')[0];
const loaderP = document.getElementById('loader');

// folosim un ID de html pt primul parametru
// si apoi, mesajul in sine
const showMessage = (htmlId, message) => {
  let p = document.getElementById(htmlId);

  if (p === null) {
    p = document.createElement('p');
    p.id = htmlId;
    document.body.append(p);
  }

  p.innerText = message;
};

image.onload = (event) => {
  const message = 'Imaginea s-a incarcat';

  showMessage('message', message);
  loaderP.innerText = message;

  // in arrow functions nu avem keywordul "this"
  // care arata catre element in memorie
  // si va fi "this" de afara (in cazul asta window)
  // currentTarget este elementul pe care am rulat
  // addEventListener
  const image = event.currentTarget;

  // callback hell
  image.addEventListener('click', () => {
    alert(`Imaginea cu URLul ${image.src} s-a incarcat.`);
  });
};
