// siaf - iife
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', function () {
      console.log('Mouseul este pe scena');
      const p = document.createElement('p');
      p.innerText = 'Mouseul este pe scena';

      document.body.append(p);
    });

    stage.addEventListener('mouseout', function () {
      console.log('Mouseul NU este pe scena');
      const p = document.createElement('p');
      p.innerText = ' Moseul NU este pe scena';

      document.body.append(p);
    });
  });
})();
