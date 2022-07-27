var friends = [
  {
    name: 'Dragos',
    surname: 'Iordache',
  },
  {
    name: 'Larry',
    surname: 'Larryson',
  },
  {
    name: 'Steven',
    surname: 'Stevenson',
  },
  {
    name: 'Carol',
    surname: 'Carolson',
  },
  {
    name: 'Andra',
    surname: 'Andrason',
  },
];

var friendsCount = friends.length;

console.warn(
  `
    Folosind o bucla for afiseaza proprietatea
    surname a tuturor obiectelor din arrayul friends.
  `,
);
for (var i = 0; i < friendsCount; i++) {
  console.log(friends[i].surname);
}

console.warn(
  `
    Afiseaza numele complet inversat al tuturor prietenilor,
    insa o data ce l-ai gasit pe steven, opreste
    bucla cu ajutorul keywordului break si afiseaza propozitia: “M-am oprit la Stevenson Steven.”.
  `,
);

for (var i = 0; i < friendsCount; i++) {
  var friend = friends[i];
  var fullName = friend.surname + ' ' + friend.name;

  if (friend.name === 'Steven') {
    console.log('M-am oprit la ' + fullName + '.');

    break;
  }

  console.log(fullName);
}

console.warn(
  `
    Folosind keywordul continue, afiseaza numele complet inversat al prietenilor,
    doar daca numarul de caractere total al numelor lor este mai mare de 13
    sub forma de propozitii “Prenume Nume are mai mult de 13 caractere.”.
  `,
);
for (var i = 0; i < friendsCount; i++) {
  var friend = friends[i];
  var fullName = friend.surname + ' ' + friend.name;

  if (fullName.replaceAll(' ', '').length <= 13) {
    continue;
  }

  console.log(fullName + ' are mai mult de 13 caractere.');
}
