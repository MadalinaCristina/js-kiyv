// siaf - iife
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const stage = document.querySelector('.stage');

    stage.addEventListener('mouseover', function () {
      const message = 'Mouseul este pe scena';
      console.log(message);
      showMessage(message);
    });

    stage.addEventListener('mouseout', function () {
      const message = 'Mouseul nu este pe scena';
      console.log(message);
      showMessage(message);
    });
  });

  // hoisting
  function showMessage(message) {
    const paragraphElement = document.createElement('p');
    paragraphElement.innerText = message;
    paragraphElement.classList.add('message');

    document.body.append(paragraphElement);
  }
})();
