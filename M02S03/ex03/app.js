const stage = document.querySelector('.stage');
let stageCounter = 0;
let sidesCounter = 0;

const showMessage = (className = 'message', message = '') => {
  let p = document.querySelector('.' + className);

  if (p === null) {
    p = document.createElement('p');
    p.classList.add(className);
    document.body.append(p);
  }

  p.innerText = message;
};

stage.addEventListener('mouseover', () => {
  showMessage(
    'stageCounter',
    `Mouseul a fost pe scena de ${++stageCounter} ori.`,
  );
  showMessage('message', 'Mouseul este pe scena');
  showMessage(
    'sidesMessage',
    `Mouseul a trecut peste laturi de ${++sidesCounter} ori.`,
  );
});

stage.addEventListener('mouseout', () => {
  showMessage('message', 'Mouseul NU este pe scena');
  showMessage(
    'sidesMessage',
    `Mouseul a trecut peste laturi de ${++sidesCounter} ori.`,
  );
});
