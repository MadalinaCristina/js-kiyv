const express = require('express'),
  bodyParser = require('body-parser'),

  PORT = process.env.PORT || 8080,

  app = express();

let persons = require('./api/persons');

app
  .use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(bodyParser.text())
  .use(bodyParser.json({
    type: 'application/json'
  }))
  .use('/persons', persons)
  .get('*', (req, res) => {
    res.json({
      message: 'go to /persons'
    });
  });


if (!module.parent) {
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
  });
}

module.exports = app;
