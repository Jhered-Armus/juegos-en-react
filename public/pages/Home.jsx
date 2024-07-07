import React from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import { games } from '../utils/CONST_GAME.JS'

export function Home () {
  return (
    <Container fluid className='mt-3'>
      <Row>
        <Col>
          <Carousel
            indicators controls className='justify-content-center align-items-center custom-carousel'
            style={{ maxWidth: '700px', maxHeight: '800px', margin: 'auto' }}
          >
            {games.map((game, index) => (
              <Carousel.Item key={index} style={{ height: '600px', maxWidth: '600px', objectFit: 'contain' }}>
                <img
                  className='d-block w-100 img-fluid'
                  src={game.image}
                  alt={game.name}
                />
                <Carousel.Caption className='bg-dark border border-info rounded-4 d-flex row justify-content-center'>
                  <h3>{game.name}</h3>
                  <p>{game.description}</p>
                  <Button variant='primary' href={game.path}>Jugar ahora</Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}
