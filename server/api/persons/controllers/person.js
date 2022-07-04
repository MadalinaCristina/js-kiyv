const fs = require('fs');
const filePath = './api/persons/models/persons.data';

function readData() {
  const data = fs.readFileSync(filePath, 'utf8');

  return (data.trim().split('\r\n'));
}

function writeData(data) {
  fs.writeFileSync(filePath, data);
}

function parsePerson(person) {
  let personData = person.split(',');
  
  return {
    name: personData[0],
    skills: personData[1].trim().split(' ')
  }
}

function encodePerson(personData) {
  let joinableArray = [];

  joinableArray[0] = personData.name; 
  joinableArray[1] = personData.skills.join(' ');

  return joinableArray.join(',');
}

function getAll(req, res) {
    res.json({
      persons: readData().map(parsePerson)
    });
}

function addOne(req, res) {
  let persons = readData();
  
  persons.push(encodePerson(req.body.person));
  
  writeData(persons.join('\r\n'));

  res.json({
    success: true,
  });
}

module.exports = {
  getAll,
  addOne,
};


