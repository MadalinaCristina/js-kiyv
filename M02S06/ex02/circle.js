const [, , radius] = process.argv;

// similar ar fi mers Math.PI ** process.argv[2];
// the point is, e doar un array
console.log(`Suprafata cercului este ${radius * Math.PI ** 2}.`);
