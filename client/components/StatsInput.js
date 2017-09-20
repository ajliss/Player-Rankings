import React from 'react';
import {Form, FormGroup, ControlLabel, Button, FormControl} from 'react-bootstrap';

class StatsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      name: '',
      ppg: 0,
      apg: 0,
      rpg: 0
    }
    this.changeName = this.changeName.bind(this);
    this.changePPG = this.changePPG.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeRPG = this.changeRPG.bind(this);
    this.changeAPG = this.changeAPG.bind(this);
  }


  changeName(event) {
    this.setState({name: event.target.value});
  }
  
  changePPG(event) {
    this.setState({ppg: parseFloat(event.target.value)});
  }

  changeAPG(event) {
    this.setState({apg: parseFloat(event.target.value)});
  }

  changeRPG(event) {
    this.setState({rpg: parseFloat(event.target.value)});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postStats(this.state.name, this.state.ppg, this.state.apg, this.state.rpg);
  }

  render() {
    return (
      <div>
        <Form inline>
          <FormGroup controlId="formInlineName">
            <ControlLabel>Name</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="Allen Iverson" onChange={this.changeName}/>
          </FormGroup>
          {' '}
          <FormGroup controlId="ppgInput">
            <ControlLabel>Points Per Game</ControlLabel>
            {' '}
            <FormControl type="float" placeholder="0.0" onChange={this.changePPG}/>
          </FormGroup>
          {' '}
          <FormGroup controlId="apgInput">
            <ControlLabel>Assists per Game</ControlLabel>
            {' '}
            <FormControl type="float" placeholder="0.0" onChange={this.changeAPG}/>
          </FormGroup>
          {' '}
          <FormGroup controlId="rpgInput">
            <ControlLabel>Rebounds Per Game</ControlLabel>
            {' '}
            <FormControl type="float" placeholder="0.0" onChange={this.changeRPG}/>
          </FormGroup>
          {' '}
          <Button type="button" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default StatsInput;