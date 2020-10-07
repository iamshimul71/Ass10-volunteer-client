import { Button,Navbar,FormControl,Nav,Form,InputGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import logo from '../../images/logo.png'
import { logDOM } from '@testing-library/react';
import './Header.css'
//import fakeData from '../../fakeData'
import Volunteer from '../Volunteer/Volunteer';

const Header = () => {
  
    return (
        <div className="head-section">
           <div class="container">
           <Navbar  >
    <Navbar.Brand href="#home">
        <img className="w-50" src={logo} alt=""/>
    </Navbar.Brand>
    <Nav className="Link-color">
      <Nav.Link className="Link-color" href="#home">Home</Nav.Link>
      <Nav.Link className="Link-color" href="#features">Donation</Nav.Link>
      <Nav.Link className="Link-color" href="#pricing">Events</Nav.Link>
      <Nav.Link className="Link-color" href="#features">Blog</Nav.Link>
      <Nav.Link className="Link-color Register pl-3 pr-3" href="#pricing">Register</Nav.Link>
      <Nav.Link className="Link-color Admin pl-3 pr-3" href="#features">Admin</Nav.Link>
     
      
    </Nav>
    
  </Navbar>
  <h3 className="head-title">I Grow by Helping People in need</h3><br/>
  <InputGroup className="mb-3 w-50 mx-auto">
    <FormControl
      placeholder="Search....."
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <InputGroup.Text className="search" id="basic-addon2">Search</InputGroup.Text>
    </InputGroup.Append>
  </InputGroup>
   
    



          </div>
        </div>
        
    );
};

export default Header;