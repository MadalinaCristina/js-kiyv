function calculateRectangleArea(width, height) {
  return width * height;
}

console.warn(
  `
    Folosind functia calculateRectangleArea()
    afiseaza suprafata unui dreptunghi de 4 pe 3
  `,
);
console.log(calculateRectangleArea(4, 3));

console.warn(
  `
    Afiseaza suprafata totala a unor dreptunghiuri
    de 5 pe 3, respectiv 3 pe 2. Foloseste variabile.
  `,
);
console.log(calculateRectangleArea(5, 3), calculateRectangleArea(3, 2));

console.warn(
  `
    Calculeaza intr-o variabila numita
    squareSurface aria unui patrat de 3 pe 3.
  `,
);
const squareSurface = calculateRectangleArea(3, 3);
console.log(squareSurface);
