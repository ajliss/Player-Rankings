const express = require('express');


const server = express();

server.get('/', (req, res) => {
  res.send('Got \'em');
})

server.listen(8000, () => {
  console.log('Server listening at port 8000');
})