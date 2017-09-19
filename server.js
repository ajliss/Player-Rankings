const express = require('express');
const parser = require('body-parser');
const path = require('path');
const db = require('./database');

const server = express();
server.use(parser.json());
server.use(express.static('./public'))

server.get('/players', (req, res) => {
  db.players.findAll()
  .then((results) => {
  res.status(200).send(results)
  })
});

server.get('/averages', (req, res) => {
  res.status(200).send(data)
});

server.post('/players', (req, res) => {
  db.players.create({
    name: req.body.name,
    age: req.body.age,
    position: req.body.position
    })
  .then(
    res.status(201).send('Spinning and winning')
    )
})

server.post('/averages', (req, res) => {
  // create average instance and put it into db
  res.status(201).send('posting and toasting');
})


server.listen(8000, () => {
  console.log('Server listening at port 8000');
})