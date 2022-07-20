var userName = prompt('Cum te cheama?');
var letter = prompt('Introdu o litera');
var message = '';

letter = letter.toLowerCase();

if (userName.toLowerCase().includes(letter) === true) {
  message = `Numele include litera ${letter}`;
} else {
  message = `Numele NU include litera ${letter}`;
}

var userNameParagraph = document.getElementById('userName');
var characterCountParagraph = document.getElementById('characterCount');
var letterPresenceParagraph = document.getElementById('letterPresence');
var characterCount = userName.replaceAll(' ', '').length;

userNameParagraph.innerText = `Ma numesc ${userName}`;
characterCountParagraph.innerText = `Numele introdus are ${characterCount} caractere.`;
letterPresenceParagraph.innerText = message;
