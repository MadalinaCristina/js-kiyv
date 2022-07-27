// var i = 1;

// while (i < 100) {
//   console.log(i);

//   i++;
// }

// Folosind keywordul break opreste bucla
// atunci cand numarul este egal cu 50 (dar afiseaza-l).
var i = 1;

while (i < 100) {
  if (i > 50) {
    i++; // <- important

    break;
  }

  console.log(i);

  i++;
}
