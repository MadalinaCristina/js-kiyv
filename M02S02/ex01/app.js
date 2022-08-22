// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.append(p);

const $p = $('<p>', {
  text: 'Textul care trebuie sa apara in paragraf',
  id: 'myParagraph',
  class: 'clase de css',
});
const $msg = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere',
});

const $container = $('.container');
$p.appendTo($container);

$container.append($msg);

setTimeout(function () {
  $msg.addClass('error');
}, 5000);

$('<span>', {
  id: 'example',
  text: 'ParolaMea',
}).appendTo($msg);

$('<h2>', {
  text: 'Mesaje',
}).prependTo($container);

// $('<div>', {
//   class: 'navigation',
//   text: 'x',
// }).after($container);
// ^ wrong

$container.after(
  $('<div>', {
    class: 'navigation',
  }),
);

$('.navigation').append(
  $('<a>', {
    text: 'Primul Link',
    href: '/',
    title: 'Test',
    class: 'nav-link',
  }),
);

$('.navigation .nav-link').before(
  $('<h2>', {
    text: 'Navigatie',
  }),
);
