import { Col, Container, Row } from 'react-bootstrap'
import React from 'react'
import { FaCodeBranch, FaGithub } from 'react-icons/fa'
import { PRIMARY_COLOR, THIRD_COLOR } from '../style/colors'

export function Footer () {
  const iconStyle = {
    fontSize: '24px', // adjust the size as needed
    color: 'white' // change the color as needed
  }

  return (
    <footer className='text-white mt-5' style={{ background: PRIMARY_COLOR }}>
      <Container fluid className='p-4'>
        <Row>
          <Col md={6} className='mb-3 mb-md-0'>
            <h5>Acerca de mi</h5>
            <p>Soy un programador junior apasionado por la tecnología y siempre buscando nuevos desafíos</p>
            <p>
              Este proyecto está hecho con <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>React</a> y <a href='https://getbootstrap.com/' target='_blank' rel='noopener noreferrer' style={{ textDecoration: 'none', color: 'white' }}>Bootstrap</a>.
            </p>
          </Col>

          <Col md={6} className='d-flex row justify-content-end'>
            <h5 className='text-end'>Repositorio</h5>
            <Container className='d-flex justify-content-end gap-4'>
              <a href='https://github.com/Jhered-Armus' target='_blank' rel='noopener noreferrer' style={iconStyle}>
                <FaGithub />
              </a>
              <a href='https://github.com/Jhered-Armus/games-in-react' target='_blank' rel='noopener noreferrer' style={iconStyle}>
                <FaCodeBranch />
              </a>
            </Container>
          </Col>
        </Row>
      </Container>
      <Container fluid className='p-2' style={{ background: THIRD_COLOR }}>
        <p className='text-center mb-0'>©2023</p>
      </Container>
    </footer>
  )
}
