const showMessage = (message, target) => {
  // manipulam acest element de DOM
  // in memorie, pana in momentul in care
  // il adaugam in DOM efectiv
  const p = document.createElement('p');
  p.innerText = message;

  // momentul efectiv:
  target.append(p);
};

const buttonElement = document.querySelector('.btn');
const loResContainer = document.querySelector('.lo-res');
const midResContainer = document.querySelector('.mid-res');
const hiResContainer = document.querySelector('.hi-res');

buttonElement.addEventListener('click', () => {
  const width = window.innerWidth;
  const message = 'Butonul a fost apasat in aceasta rezolutie.';

  if (width < 650) {
    showMessage(message, loResContainer);
  }

  if (width >= 650 && width < 1000) {
    showMessage(message, midResContainer);
  }

  if (width >= 1000) {
    showMessage(message, hiResContainer);
  }
});
