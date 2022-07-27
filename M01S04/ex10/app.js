var person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 35,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  `
    Folosind obiectul person si forEach,
    afiseaza skillurile din pozitiile impare ale arrayului.
  `,
);
person.skills.forEach(function (skill, index) {
  if (index % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(
  `
    In mod similar, afiseaza skillurile care contin litera a.
  `,
);
person.skills.forEach(function (skill) {
  if (skill.toLowerCase().includes('a')) {
    console.log(skill);
  }
});

console.warn(
  `
    Folosind forEach afiseaza propozitia:
    "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."
  `,
);
var message = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, index, friends) {
  var punctuation = ', ';
  var friendsCount = friends.length;

  if (index === friendsCount - 1) {
    punctuation = '.';
  }

  // if (index === friendsCount - 2) {
  //   punctuation = ' si ';
  // }

  message += friend.name + ' ' + friend.surname + punctuation;
});
console.log(message);

console.warn(
  `
    Folosind forEach, afiseaza numarul total de
    ani pe care il au persoanele din arrayul friends,
    doar daca au varsta mai mare decat 30 inclusiv.
  `,
);
var totalAge = 0;
person.friends.forEach(function (friend) {
  if (friend.age >= 30) {
    totalAge += friend.age;
  }
});
console.log(totalAge.toString());

console.warn(
  `
    Folosind forEach, afiseaza suma anilor de nastere
    a persoanelor care au varsta impara.
  `,
);
var totalYears = 0;
var currentYear = 2022;
person.friends.forEach(function (friend) {
  var birthYear = currentYear - friend.age;

  if (friend.age % 2 !== 0) {
    totalYears += birthYear;
  }
});
console.log(totalYears.toString());

console.warn(
  `
    Afiseaza diferenta de varsta dintre
    persoana si prietenii din arrayul friends daca
    aceasta este mai mare sau egala cu 2 ani.
  `,
);
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);

  if (ageDiff >= 2) {
    console.log(ageDiff);
  }
});

console.warn(
  `
    Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani.
    Intre Dragos si Steven... "
  `,
);
var message = '';
person.friends.forEach(function (friend) {
  var ageDiff = Math.abs(person.age - friend.age);

  message +=
    'Intre ' +
    person.name +
    ' si ' +
    friend.name +
    ' este o diferenta de ' +
    ageDiff +
    ' ani. ';
});
console.log(message.trim());

console.warn(
  `
    Folosind metoda reverse si apoi forEach, afiseaza
    in ordine inversa elementele arrayului skills.
  `,
);
person.skills.reverse().forEach(function (skill) {
  console.log(skill);
});
