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
  db.avgs.findAll()
  .then((results) => {
  res.status(200).send(results)
  })
});

server.post('/players', (req, res) => {
  if (req.body.name !== '') {
    db.players.findOrCreate({where: {
      name: req.body.name,
      age: req.body.age,
      position: req.body.position
      }})
    .then(
      res.status(201).send('Spinning and winning')
      )
  } else {
    res.status(304).send('Failed to post, no name received.');
  }
})

server.post('/averages', (req, res) => {
  db.players


  res.status(201).send('posting and toasting');
})


server.listen(8000, () => {
  console.log('Server listening at port 8000');
})