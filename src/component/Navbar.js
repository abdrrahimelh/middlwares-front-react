import React from 'react';
import "../App.css"
import * as ReactBootStrap from "react-bootstrap";
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';



const NavBar = () => {
    return(
        <div className="App">
    <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="danger" variant="dark">
  <ReactBootStrap.Navbar.Brand href="#home">Rapid finance</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto"> 
    <Link to="/Features">
    <ReactBootStrap.Nav.Link href="#features">Features</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/Pricing">
    <ReactBootStrap.Nav.Link href="#pricing">About</ReactBootStrap.Nav.Link>
    </Link>
    <Link to="/Dankmemes">
    <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        Live demo
      </ReactBootStrap.Nav.Link>
      </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
        </div>
    )
}

export default NavBar;