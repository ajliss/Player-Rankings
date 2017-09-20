import React from 'react';
import {Nav, NavItem} from 'react-bootstrap';

const NavBar = (props) => {
  return (
    <div>
       <Nav bsStyle="tabs" activeKey="1">
        <NavItem onClick={props.showPlayers}>Players</NavItem>
        <NavItem onClick={props.showAvgs}>Averages</NavItem>
        <NavItem onClick={props.toggleBio}>Add a Player</NavItem>
        <NavItem onClick={props.toggleStatsForm}>Add Stats</NavItem>
       </Nav>
    </div>
  )
}

export default NavBar;