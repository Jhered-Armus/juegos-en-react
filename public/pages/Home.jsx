import React from 'react'
import { Button, Carousel, Container } from 'react-bootstrap'
import { games } from '../utils/CONST_GAME.JS'

export function Home () {
  return (
    <Container fluid className='mt-3 flex-grow-1'>
      <Carousel indicators controls className='custom-carousel' style={{ maxWidth: '700px', maxHeight: '800px', margin: 'auto' }}>
        {games.map((game, index) => (
          <Carousel.Item key={index} style={{ height: '600px' }}>
            <div className='h-100 d-flex justify-content-center align-items-center'>
              <img className='img-fluid' src={game.image} alt={game.name} />
            </div>
            <Carousel.Caption className='bg-dark border border-info rounded-4 d-flex row justify-content-center'>
              <h3>{game.name}</h3>
              <p>{game.description}</p>
              <Button variant='primary' href={game.path}>Jugar ahora</Button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  )
}
