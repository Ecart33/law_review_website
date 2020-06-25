import React from 'react';

import { Link } from 'react-router-dom';

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown
} from 'react-bootstrap';

import styled from 'styled-components';

import { UserData } from './App';

export const Header = () => (
  <>
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>Avenues Law Review</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link>
            <Link to='/'>Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/submit'>Submit</Link>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-success'>Search</Button>
        </Form>
      </Navbar.Collapse>
      <Nav>
        <StyledDrop title='Login' id='basic-nav-dropdown'>
          <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.2'>Another action</NavDropdown.Item>
          <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item>
        </StyledDrop>
      </Nav>
    </Navbar>
  </>
);

const StyledDrop = styled(NavDropdown)`
  padding: 5px;
  padding-left: 10px;
`;
