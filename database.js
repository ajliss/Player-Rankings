const Sequelize = require('sequelize');

const sequelize = new Sequelize('bball', 'root', '', {
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
  apg: {
    type: Sequelize.DOUBLE
  },
  rpg: {
    type: Sequelize.DOUBLE
  }
});

Averages.belongsTo(Players);

sequelize.sync();


module.exports.players = Players;
module.exports.avgs = Averages;