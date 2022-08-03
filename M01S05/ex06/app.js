const person = {
  getName: function () {
    return 'Dragos Iordache';
  },
  getAge: function () {
    return 35;
  },
};

// forced example
function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  return person[methodName]();
}

console.log(accessor('Name'));
