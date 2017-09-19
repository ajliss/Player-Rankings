import React from 'react';
import PlayersList from './PlayersList';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    this.getPlayers().then(response => {
      this.setState({
        players: response.data
      })
    });
  }

  getPlayers() {
    return axios.get('/players');
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