import React from 'react';
import Player from './Player'

const PlayersList = (props) => (
  <div>
    {props.players.map((player, key) => 
    <Player player={player} key={key}/>)}
  </div>
);

export default PlayersList;