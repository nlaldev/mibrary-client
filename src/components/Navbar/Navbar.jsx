import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import './Navbar.css'

const navBar = (
    <Navbar className="navbar" variant="dark">
      <Container>
        <Navbar.Brand href="/">Mibrary</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/*Login*/}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

function NavBar () {
  return ( navBar )
}

export default NavBar;
