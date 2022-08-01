var globalVariable = '🌏 Ma aflu in contextul global';

if (false) {
  var localVariable = '🏠 Ma aflu in contextul local';
  var globalVariable = '🚫 Nu ma aflu in contextul global';

  console.log(globalVariable);
  console.log(localVariable);
}

console.log(globalVariable);
console.log(localVariable);
// block level scope
