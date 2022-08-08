const paragraphElement = document.createElement('p');
const userAgentString = navigator.userAgent;
let message = 'Nu stim ce browser folosesti.';

if (userAgentString.includes('Chrome')) {
  message = 'Navighezi folosind Chrome';
}

paragraphElement.innerText = message;

document.body.append(paragraphElement);
