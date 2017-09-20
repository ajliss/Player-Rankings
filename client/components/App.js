import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PlayersList from './PlayersList';
import Input from './Input';
import NavBar from './NavBar';
import StatsInput from './StatsInput'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      averages: [],
      showBioInput: false, 
      showStatsInput:false
    }
    this.toggleBio = this.toggleBio.bind(this);
    this.showAvgs = this.showAvgs.bind(this);
    this.showPlayers = this.showPlayers.bind(this);
    this.toggleStatsForm = this.toggleStatsForm.bind(this);
    this.postStats = this.postStats.bind(this);
    this.postBio = this.postBio.bind(this);
  }

  componentDidMount() {
    this.showPlayers();
  }

  showPlayers() {
    axios.get('/players').then(response => {
      this.setState({
        players: response.data,
        showBioInput: false,
        showStatsInput: false
      })
    });
  }

  showAvgs() {
    console.log('avgs')
    axios.get('/averages').then(response => {
      this.setState({
        avgs: response.data,
        showBioInput: false, 
        showStatsInput: false
      })
    });
  } 

  toggleBio() {
    this.setState({showBioInput: true, showStatsInput: false})
  }

  toggleStatsForm() {
    this.setState({showBioInput: false, showStatsInput: true})
  }

  postBio(name, age, position) {
    console.log('posted and toasted ', name, age, position)
      axios.post('/players', {name: name, age: age, position: position}).then(response => {
        console.log(response);
      })
  }

  postStats(name, ppg, apg, rpg) {
    console.log('posted and toasted ', name, ppg, apg, rpg)
      axios.post('/averages', {name: name, ppg: ppg, apg: apg, rpg: rpg}).then(response => {
        console.log(response);
      })
  }

  render() {
    return (
      <div id="home">
        <div>
          <NavBar 
            showPlayers={this.showPlayers} 
            showAvgs={this.showAvgs}
            toggleBio={this.toggleBio}
            toggleStatsForm={this.toggleStatsForm}
          />
        </div>
          { this.state.showStatsInput ? 
          <StatsInput postStats={this.postStats}/> :
          (this.state.showBioInput ? 
          <Input postBio={this.postBio}/> : 
          <PlayersList players={this.state.players}/>) }
      </div>
    )
  }
}
export default App;
