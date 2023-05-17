import React from "react";
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">Attack on Titan</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="m1-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="characters">Characters</Nav.Link>
          <Nav.Link as={Link} to="episodes">Episodes</Nav.Link>
          <Nav.Link as={Link} to="quiz">Quiz</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;