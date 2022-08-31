// old common JS modules
// node trece la ES6
const { readFileSync } = require('fs');

const data = readFileSync('file.txt', 'utf-8');

console.log(`${data}
This is our node script!`);
