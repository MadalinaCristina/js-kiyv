// salvam valoarea initiala de latime a ferestrei
let oldWidth = window.innerWidth;

const showMessage = (message, htmlId) => {
  let p = document.getElementById(htmlId);

  if (p === null) {
    p = document.createElement('p');
    p.id = htmlId;
    document.body.append(p);
  }

  p.innerText = message;
};

const showWindowSurface = () => {
  showMessage(
    `Fereastra are acum suprafata de ${
      window.innerHeight * window.innerWidth
    } pixeli.`,
    'surfaceP',
  );
};
// recipe for debounce
// o functie debounced va executa, doar dupa ce au treuct milisecundele specificate
// dupa ce am oprit complet resizeul ferestrei, dupa 300 ms in cazul asta
// event handlerul va fi executat
// problema la resize, este ca event handerul ar fi executat
// CONSTANT daca nu am fi abut debounce
const debouncedWindowSurface = debounce(showWindowSurface, 300);
window.addEventListener('resize', debouncedWindowSurface);
showWindowSurface();

// window face parte din BOM
// browser object model
// nu intra sub incidenta DOMContentLoaded
window.addEventListener(
  'resize',
  debounce(() => {
    const windowWidth = window.innerWidth;
    console.log('Ferastra si-a schimbat dimensiunea.');
    showMessage(windowWidth, 'widthP');

    // operatorul ternar
    const message =
      windowWidth !== oldWidth ? 'Fereastra si-a schimbat latimea' : '';
    oldWidth = windowWidth;
    showMessage(message, 'secondP');
  }, 300),
);
