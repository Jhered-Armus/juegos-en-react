import React, { useEffect, useRef, useState } from 'react'
import { Button, ButtonGroup, Card, Col, Container, Row } from 'react-bootstrap'
import { GridMemorize } from '../components/memorise/GridMemorize'
import { CustomButton } from '../components/Button'
import { imgButton } from '../utils/CONST_GAME.JS'

export function GameMemorize () {
  const [cards, setCards] = useState([])
  const [play, setPlay] = useState(false)
  const [boardSize, setBoardSize] = useState(8)
  const cardValues = ['😀', '🐶', '🍎', '🚗', '🌟', '🎈', '📚', '🏆', '🌍', '🧩', '🎨', '🎹', '🎲', '🎯', '🎧', '🎮'] // Array de valores únicos
  const [score, setScore] = useState(0)
  const [time, setTime] = useState(15)
  const timerRef = useRef(null)
  const [pause, setPause] = useState(false)
  const [diasableBUtton, setDisableButton] = useState(false)

  useEffect(() => {
    suffleCards(generateCard(boardSize))
  }, [boardSize])

  function generateCard (size) {
    const selectCards = cardValues.slice(0, size / 2)
    const cards = selectCards.flatMap((value, index) => [
      { id: index * 2, value, isFlipped: false },
      { id: index * 2 + 1, value, isFlipped: false }
    ])
    return cards
  }

  useEffect(() => {
    if (play) {
      if (!pause) {
        timerRef.current = setTimeout(() => {
          setTime(time - 1)
        }, 1000)
      }
    }

    // Limpiar el timer cuando el componente se desmonte
    return () => clearTimeout(timerRef.current)
  }, [time, play, pause])

  // Detener el timer cuando llegue a cero
  useEffect(() => {
    if (time === 0) {
      clearTimeout(timerRef.current)
    }
  }, [time, timerRef])

  function suffleCards () {
    const card = generateCard(boardSize)
    const shuffledCards = card.sort(() => Math.random() - 0.5)
    setCards(shuffledCards)
  }

  function handleBoarSize (size, time) {
    if (size !== boardSize) {
      setBoardSize(0)
      setScore(0)
      setCards([])
      setTime(time)
    }
    setBoardSize(size)
  }
  const handlerPause = () => {
    setPause(!pause)
  }
  function reshuffle () {
    suffleCards()
    setScore(0)
    setDisableButton(false)
    if (boardSize === 8) setTime(15)
    if (boardSize === 16) setTime(30)
    if (boardSize === 32) setTime(40)
  }
  return (
    <Container className='flex-grow-1'>
      <h1 style={{ textAlign: 'center' }}>Memorama</h1>
      <Row>
        <Container className='d-flex row-2 gap-1 justify-content-center flex-wrap'>
          <Col md={8}>
            {play
              ? (<GridMemorize
                  cards={cards} setScore={setScore}
                  score={score} setTime={setTime}
                  time={time} pause={pause}
                  setDisableButton={setDisableButton}
                  setPause={setPause}
                 />)
              : null}
          </Col>
          <Col className='d-flex justify-content-center'>
            <Card className='text-center' style={{ width: '100%', maxHeight: '300PX' }}>
              <Card.Body>
                <Card.Title>Memorama</Card.Title>
                <Card.Body>
                  {play
                    ? (
                      <div className=' d-flex row-2 gap-1 justify-content-center'>
                        <CustomButton
                          disabled={diasableBUtton}
                          onClick={handlerPause}
                          icon={pause ? imgButton.pause : imgButton.play}
                          variant='secondary'
                        >
                          {pause ? 'Continuar' : 'Pausar'}
                        </CustomButton>
                        <Button onClick={() => reshuffle()} variant='secondary'>
                          Volver a barajar
                        </Button>
                      </div>
                      )
                    : (
                      <Button onClick={() => setPlay(true)} variant='secondary'>
                        Empezar
                      </Button>

                      )}
                </Card.Body>
                {play && (
                  <>
                    <ButtonGroup>
                      <CustomButton onClick={() => handleBoarSize(8, 15)}>8 Cards</CustomButton>
                      <CustomButton onClick={() => handleBoarSize(16, 30)}>16 Cards</CustomButton>
                      <CustomButton onClick={() => handleBoarSize(32, 40)}>32 Cards</CustomButton>
                    </ButtonGroup>
                    <Card.Text>Score: {score}</Card.Text>
                    <Card.Text>Tiempo: {time}</Card.Text>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Container>
      </Row>
    </Container>
  )
}
