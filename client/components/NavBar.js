import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <div>
       <Nav bsStyle="tabs" activeKey="1">
        <NavItem onClick={props.showPlayers.bind(this)}>Players</NavItem>
        <NavItem onClick={props.showAvgs.bind(this)}>Averages</NavItem>
        <NavItem onClick={props.toggle.bind(this)}>Add a Player</NavItem>
        <NavItem eventKey="3" href="/averages">Add Stats</NavItem>
       </Nav>
    </div>
  )
}

export default NavBar;