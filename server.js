const express = require('express');
const parser = require('body-parser')
const db = require('./database')

const server = express();

server.get('/', (req, res) => {
  res.send('Got \'em');
});

server.get('/players', (req, res) => {
  if (req.body.name) {
    // get player by name
  } else {
    // get all players
  }
  res.status(200).send(data)
});

server.get('/averages', (req, res) => {
  if (req.body.name) {
    // get player and averages by name
  } else {
    // get all players and averages
  }
  res.status(200).send(data)
});

server.post('/players', (req, res) => {
  // create player instance and put it into db
  res.status(201).send('posted and toasted');
})

server.post('/averages', (req, res) => {
  // create average instance and put it into db
  res.status(201).send('posted and toasted');
})


server.listen(8000, () => {
  console.log('Server listening at port 8000');
})