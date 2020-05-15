import React from 'react';

import { Link } from 'react-router-dom';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

// import styled from 'styled-components';

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
    </Navbar>
  </>
);
