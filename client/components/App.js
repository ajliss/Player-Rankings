import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PlayersList from './PlayersList';
import Input from './Input';
import NavBar from './NavBar';
import Player from './Player'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: [],
      averages: [],
      showForm: false
    }
  }

  componentDidMount() {
    this.showPlayers();
  }

  showPlayers() {
    axios.get('/players').then(response => {
      this.setState({
        players: response.data,
        showForm: false
      })
    });
  }

  showAvgs() {
    console.log('avgs')
    axios.get('/averages').then(response => {
      this.setState({
        avgs: response.data
      })
    });
  } 

  toggleForm() {
    this.setState({showForm: true})
  }

  render() {
    return (
      <div>
        <div>
          <NavBar 
            showPlayers={this.showPlayers.bind(this)} 
            showAvgs={this.showAvgs.bind(this)}
            toggle={this.toggleForm.bind(this)}
          />
        </div>
        { this.state.showForm ? <Input /> : <PlayersList players={this.state.players}/> }
      </div>
    )
  }
}
export default App;

  // render() {
  //   return (
  //     <Router>
  //       <div>
  //         <ul>
  //           <li><Link to="/players">Players</Link></li>
  //         </ul>

  //         <hr/>

  //         <Route path="/players" component={PlayersList}/>
  //       </div>
  //     </Router>
  //   )
  // }