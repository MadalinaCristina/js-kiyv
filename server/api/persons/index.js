const express = require('express'), 
  person = require('./controllers/person'),
  app = express(); 


app.route('/')
  .get(person.getAll)
  .post(person.addOne);


module.exports = app;

