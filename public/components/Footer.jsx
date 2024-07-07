import { Col, Container, Row } from 'react-bootstrap'
import React from 'react'
import { FaFacebookF, FaGithub } from 'react-icons/fa'
import { PRIMARY_COLOR, THIRD_COLOR } from '../style/colors'

export function Footer () {
  return (
    <footer className=' text-white mt-5' style={{ background: PRIMARY_COLOR }}>
      <Container fluid className='p-4'>
        <Row>
          <Col md={6} className='mb-3 mb-md-0'>
            <h5>Acerca de mi</h5>
            <p>Soy un programador junior apasionado por la tecnología y siempre buscando nuevos desafíos</p>
          </Col>

          <Col md={6} className='d-flex row'>
            <h5 style={{ textAlign: 'end' }}>Contacto</h5>
            <Container className='d-flex justify-content-end'>
              <a href='https://www.facebook.com/boris.parralemus' target='_blank' rel='noopener noreferrer' className='text-white m-2'>
                <FaFacebookF />
              </a>
              <a href='https://github.com/Jhered-Armus' target='_blank' rel='noopener noreferrer' className='text-white m-2'>
                <FaGithub />
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
