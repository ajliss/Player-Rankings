import React from 'react';
import PlayersList from './PlayersList';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: ['Houston']
    }
  }


  render() {
    return (
      <div>
        <div>Swooping and Hooping</div>
        <PlayersList players={this.state.players}/>
      </div>
    )
  }
}
export default App;