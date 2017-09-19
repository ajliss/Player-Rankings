import React from 'react';

const Player = ({player}) => {
  return (
    <div>
      {player.name}, {player.position}, {player.age} 
    </div>
  )
};

export default Player;