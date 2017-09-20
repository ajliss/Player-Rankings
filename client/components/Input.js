import React from 'react';
import {Form, FormGroup, ControlLabel, Button, FormControl} from 'react-bootstrap';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      name: '',
      age: 0,
      position: ''
    }
    this.changeName = this.changeName.bind(this);
    this.changeAge = this.changeAge.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changePosition = this.changePosition.bind(this);
  }


  changeName(event) {
    this.setState({name: event.target.value});
  }
  
  changeAge(event) {
    this.setState({age: parseInt(event.target.value)});
  }

  changePosition(event) {
    this.setState({position: event.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.postBio(this.state.name, this.state.age, this.state.position);
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
          <FormGroup controlId="ageInput">
            <ControlLabel>Age</ControlLabel>
            {' '}
            <FormControl type="age" placeholder="27" onChange={this.changeAge}/>
          </FormGroup>
          {' '}
          <FormGroup controlId="positionInput">
            <ControlLabel>Position</ControlLabel>
            {' '}
            <FormControl type="text" placeholder="SG" onChange={this.changePosition}/>
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

export default Input;