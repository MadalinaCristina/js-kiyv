const dateBuilder = [
  function () {
    return '2022';
  },
  function () {
    return 'August';
  },
  () => {
    return '3';
  },
];

dateBuilder[3] = function () {
  return 'Miercuri';
};

console.warn(`Folosind arrayul dateBuilder. Afiseaza luna curenta.`);
console.log(dateBuilder[1]());

console.warn(
  `
  Afiseaza propozitia: “Suntem in anul an.”.
  `,
);
console.log(`Suntem in anul ${dateBuilder[0]()}.`);

console.warn(
  `
  Afiseaza propozitia: “Suntem in luna ll in anul aa.”.
  `,
);
console.log(`Suntem in luna ${dateBuilder[1]()} in anul ${dateBuilder[0]()}.`);

console.warn(
  `
  Afiseaza propozitia: “Astazi este zz.”.
  `,
);
console.log(`Astazi este ${dateBuilder[1]()}.`);
