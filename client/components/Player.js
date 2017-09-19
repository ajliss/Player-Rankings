import React from 'react';

const Player = ({player}) => {
  return (
    <div>
      {player.name}, {player.age} {player.position}
    </div>
  )
};

export default Player;