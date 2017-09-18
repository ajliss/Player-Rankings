const Sequelize = require('sequelize');

const sequelize = new Sequelize('Basketball', 'root', '', {
  host: '127.0.0.1:8000',
  dialect: 'sqlite',
  storage: './bball.sqlite'
});

const Players = sequelize.define('players', {
  name: {
    type: Sequelize.STRING
  },
  age: {
    type: Sequelize.INTEGER
  },
  position: {
    type: Sequelize.STRING
  },
});

const Averages = sequelize.define('avgs', {
  ppg: {
    type: Sequelize.DOUBLE
  },
  rpb: {
    type: Sequelize.DOUBLE
  },
  apg: {
    type: Sequelize.DOUBLE
  },

});

Averages.belongsTo(Players);

Players.sync();
Averages.sync();

module.exports.players = Players;
module.exports.avgs = Averages;