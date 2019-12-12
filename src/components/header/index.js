import React from 'react';
import styled from 'styled-components';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import { routes } from '../routes';

const HeaderBody = styled.div`
padding-top: 0.5rem;
padding-bottom: 0.5rem;
padding-left: 4rem;
padding-right: 5rem;
background-color:white;
box-shadow: 0px 0px 0px 1px rgba(0,0,0,0.16);
`;

const Header = () => (
  <HeaderBody>
    <Navbar expand="lg">
      <Navbar.Brand href="#">Habitat</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <NavDropdown title="Home">
          <NavDropdown.Item href={routes.map}>Google Map</NavDropdown.Item>
          <NavDropdown.Item href={routes.propertyList}>Property List</NavDropdown.Item>
          <NavDropdown.Item href={routes.search}>Search</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="">Admin</Nav.Link>
        <Nav.Link href="">Contacts</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  </HeaderBody>
);

export default withRouter(Header);
