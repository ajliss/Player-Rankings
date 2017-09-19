import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <div>
       <Nav bsStyle="tabs" activeKey="1">
        <NavItem eventKey="1" href="/players">Players</NavItem>
        <NavItem eventKey="2" href="/averages">Averages</NavItem>
        <NavItem eventKey="3" href="players">Add a Player</NavItem>
        <NavItem eventKey="3" href="/averages">Add Stats</NavItem>
       </Nav>
    </div>
  )
}

export default NavBar;