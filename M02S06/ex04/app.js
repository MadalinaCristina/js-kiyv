const { readFileSync } = require('fs');

const file01 = readFileSync('dir/this-other-file.txt', 'utf-8');
const file02 = readFileSync('another.txt', 'utf-8');
const file03 = readFileSync('my-file.txt', 'utf-8');

console.log(`${file02} ${file01} ${file03}!`);
