import React from 'react';
import {Form, FormGroup, ControlLabel, Button, FormControl} from 'react-bootstrap';

const Input = (props) => {
  return (
    <div>
      <Form inline>
        <FormGroup controlId="formInlineName">
          <ControlLabel>Name</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="Allen Iverson" />
        </FormGroup>
        {' '}
        <FormGroup controlId="ageInput">
          <ControlLabel>Age</ControlLabel>
          {' '}
          <FormControl type="age" placeholder="27" />
        </FormGroup>
        {' '}
        <FormGroup controlId="positionInput">
          <ControlLabel>Position</ControlLabel>
          {' '}
          <FormControl type="text" placeholder="SG" />
        </FormGroup>
        {' '}
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Input;