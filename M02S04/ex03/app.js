const heroElement = document.querySelector('.hero');
const stage = document.querySelector('.stage');
const controls = document.querySelector('.controls');
const step = 30;
const heroData = {
  x: 350,
  y: 60,
  width: heroElement.clientWidth,
  height: heroElement.clientHeight,
};

const axis = {
  N: 'y',
  S: 'y',
  E: 'x',
  W: 'x',
  ArrowDown: 'y',
  ArrowUp: 'y',
  ArrowLeft: 'x',
  ArrowRight: 'x',
};

const axis45 = {
  NW: 'y',
  SE: 'y',
  NE: 'x',
  SW: 'y',
};

const direction = {
  N: 'back',
  S: 'front',
  E: 'front',
  W: 'back',
  ArrowDown: 'front',
  ArrowUp: 'back',
  ArrowLeft: 'back',
  ArrowRight: 'front',
};

renderHero();

// event delegation at div.controls level
controls.addEventListener('click', (event) => {
  // pt delegation, target
  const button = event.target;

  // event delegation codnition
  if (button.nodeName !== 'BUTTON' || button.dataset.direction.length <= 0) {
    return;
  }
  const value = button.dataset.direction;
  const currentDirection = direction[value];
  const currentAxis = axis[value];
  const currentAxis45 = axis45[value];

  updateHeroPosition(
    currentAxis,
    currentDirection,
    currentAxis45,
    currentDirection45,
  );

  renderHero();
});

document.addEventListener('keydown', (event) => {
  const { code } = event;
  const currentDirection = direction[code];
  const currentAxis = axis[code];

  updateHeroPosition(currentAxis, currentDirection);
  renderHero();
});

// function hoisting
function renderHero() {
  const { x, y } = heroData;
  const cssText = `left: ${x}px; top: ${y}px;`;

  heroElement.setAttribute('style', cssText);
}

function updateHeroPosition(currentAxis, currentDirection) {
  // operator ternar
  heroData[currentAxis] =
    currentDirection === 'front'
      ? heroData[currentAxis] + step
      : heroData[currentAxis] - step;

  if (heroData.x <= 0) {
    heroData.x = 0;
  }

  if (heroData.y <= 0) {
    heroData.y = 0;
  }

  if (heroData.x >= stage.clientWidth - heroData.width) {
    heroData.x = stage.clientWidth - heroData.width;
  }

  if (heroData.y >= stage.clientHeight - heroData.height) {
    heroData.y = stage.clientHeight - heroData.height;
  }
}
