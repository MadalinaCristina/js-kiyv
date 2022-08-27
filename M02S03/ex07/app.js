// className
// metoda mai veche care ne da un array like
// object
// accesam prima proprietate a obiectului, folosind bracket
// notation obj.0 => trebuie scris obj[0]
const button = document.getElementsByClassName('btn')[0];
const onClick = () => {
  alert('Butonul a fost apasat');
};
const onResize = () => {
  const width = window.innerWidth;

  if (width <= 650) {
    button.removeEventListener('click', onClick);
  } else {
    button.addEventListener('click', onClick);
  }
};

onResize();

window.addEventListener('resize', onResize);
