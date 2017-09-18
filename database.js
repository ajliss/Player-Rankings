const Sequelize = require('sequelize');


const sequelize = new Sequelize('Basketball', 'root', '', {
  host: '127.0.0.1:8000',
  dialect: 'sqlite'
  storage: './bball.sqlite'
});

const Players = sequelize.define('players', {
  name: {
    type: Sequelize.STRING
  },
  
})