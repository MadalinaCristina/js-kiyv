// in arrayul process.argv vom gasi  parametrii cu care a fost
// invocat scriptul de node din linica de comanda
const arguments = process.argv;
// destructuram acest array astfel incat sa avem doar paremtrii
// oldschool ar fi:
// const test = arguments.slice(2)
// test contine acum doar parametri
// in destructurarea moderna, daca nu avem nevoie
// de primele indexuri din array, punem virgulele
const [, , ...restOfArguments] = arguments;
// primul parametru din linia de comanda,
// este acum pe pozitia 0
const side = restOfArguments[0];

console.log(`Suprafata patratului este ${side ** 2}`);
