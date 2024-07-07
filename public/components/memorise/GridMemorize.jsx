import React, { useEffect, useState } from 'react'
import { Alert, Button, Card, Col, Container, Row } from 'react-bootstrap'

export function GridMemorize ({ cards, setScore, score, setTime, time, pause }) {
  const [flipped, setFlipped] = useState([])
  const [isFlipped, setIsFlepped] = useState([])
  const [isWinner, setIsWinner] = useState(false)
  const [isOver, setIsOver] = useState(false)

  useEffect(() => {
    checkCards()
  }, [isFlipped])

  useEffect(() => {
    if (time === 0) {
      setIsOver(true)
    }
  }, [time])

  function handlerClickCard (card) {
    if (card.isFlipped || isFlipped.length === 2) {
      return
    }

    const newFlipped = [...isFlipped, card]
    setIsFlepped(newFlipped)
    card.isFlipped = true
  }

  function checkCards () {
    if (isFlipped.length === 2) {
      const [firstCard, seconCard] = isFlipped
      if (firstCard.value === seconCard.value) {
        setFlipped([...flipped, firstCard, seconCard])
        setScore(score + 1)
        setTime(time + 1)
        setIsFlepped([])
      } else {
        setTimeout(() => {
          firstCard.isFlipped = false
          seconCard.isFlipped = false
          setIsFlepped([])
        }, 1000)
      }
    }
  }
  useEffect(() => {
    winner()
  }, [score])
  function winner () {
    if (score === cards.length / 2) {
      setIsWinner(true)
    }
  }
  return (
    <Container className='w-75'>
      <Row>
        {cards.map((card) => (
          <Col key={card.id} className='col-3'>
            <Card onClick={() => !pause && !isOver && handlerClickCard(card)} style={{ textAlign: 'center' }}>
              <Card.Body>{card.isFlipped ? card.value : '?'}</Card.Body>
            </Card>
          </Col>
        ))}
        <Alert variant='success' show={isWinner}>
          <Alert.Heading>¡Éxito!</Alert.Heading>
          <p>
            Has completado el desafío con éxito. ¡Felicidades!
          </p>
          <hr />
          <div className='d-flex justify-content-end'>
            <Button onClick={() => setIsWinner(false)} variant='outline-success'>
              Cerrar
            </Button>
          </div>
        </Alert>
        <Alert variant='danger' show={isOver}>
          <Alert.Heading>Lo siento...</Alert.Heading>
          <p>
            Se acabo el tiempo
          </p>
          <hr />
          <div className='d-flex justify-content-end'>
            <Button onClick={() => setIsOver(false)} variant='outline-danger'>
              Cerrar
            </Button>
          </div>
        </Alert>
      </Row>
    </Container>

  )
}
