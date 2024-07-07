import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FOURTH_COLOR, PRIMARY_COLOR } from '../style/colors'
import logo from '../assets/logo_horizontal.png'

export function Navega () {
  return (
    <Navbar style={{ background: PRIMARY_COLOR }} expand='lg'>
      <Container>
        <Navbar.Brand style={{ color: FOURTH_COLOR }} href='/'>
          <img style={{ width: '100px' }} src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link style={{ color: FOURTH_COLOR }} href='tic-tac-toe'>Tic Tac Toe</Nav.Link>
            <Nav.Link style={{ color: FOURTH_COLOR }} href='ahorcado'>Ahorcado</Nav.Link>
            <Nav.Link style={{ color: FOURTH_COLOR }} href='snake'>Snake</Nav.Link>
            <Nav.Link style={{ color: FOURTH_COLOR }} href='memorise'>Memorise</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
