import React from 'react';
import axios from 'axios';
import PlayersList from './PlayersList';
import Input from './Input';
import NavBar from './NavBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      averages: [],
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

  getAverages() {
    return axios.get('/averages');
  }

  render() {
    return (
      <div>
        <div>
          <NavBar/>
          <Input/>
        </div>
        <div>Swooping and Hooping</div>
        <PlayersList players={this.state.players}/>
      </div>
    )
  }
}
export default App;