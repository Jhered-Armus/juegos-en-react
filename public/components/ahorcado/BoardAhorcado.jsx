import React, { useState } from 'react'
import { gameOver, resetGame, winner } from '../../utils/gameAhorcadoFunciones'
import { GenButton } from './GenBotones'
import { Col, Container, Row } from 'react-bootstrap'
import { CustomButton } from '../Button'
import { styleAhorcado } from '../../style/ahorcado'

export function BoardAhorcado ({ phrase, setPhrase, errores, setError }) {
  const [letrasAdivinadas, setLetras] = useState({})

  const letterArray = phrase.split('')

  const handlerClick = (clickButton) => {
    console.log('Botón presionado:', clickButton)
    console.log('Letras adivinadas:', letrasAdivinadas)
    console.log('Frase:', phrase)
    if (phrase.includes(clickButton)) {
      if (!letrasAdivinadas[clickButton]) {
        setLetras((prevLetras) => ({ ...prevLetras, [clickButton]: true }))
      }
    } else {
      if (!letrasAdivinadas[clickButton]) {
        setLetras((prevLetras) => ({ ...prevLetras, [clickButton]: false }))
        setError(actualizador => (actualizador + 1))
      }
    }
  }

  return (
    <Container>
      <Row>
        <Col style={{ width: '200px' }}>
          {letterArray.map((space, index, array) => (
            <span
              key={index}
              style={{ marginRight: index === array.length - 1 ? '0' : '0.5em', fontSize: '3.5em', wordBreak: 'break-all' }}
            >{letrasAdivinadas[space] ? space : (space === ' ' ? ' ' : '_')}
            </span>
          ))}
        </Col>
        <Row>
          {phrase.trim() && <GenButton
            handlerClick={handlerClick}
            statusButton={letrasAdivinadas}
                            />}
        </Row>
      </Row>

      {gameOver(errores) &&
        <Container className='border border-danger rounded-2' style={styleAhorcado.cartelGameOver}>
          <Col className='d-flex flex-column align-items-center justify-content-center'>
            <h1 className='mb-4 text-danger'>GAME OVER</h1>
            <h2 style={{ wordBreak: 'break-all' }}>FRASE: {phrase}</h2>
            <CustomButton onClick={() => resetGame({ setError, setLetras, setPhrase })}>Reinciar</CustomButton>
          </Col>
        </Container>}
      {
      (winner({ phrase, objPhrase: letrasAdivinadas }) && phrase !== '') &&
        <Container className='border border-success rounded-2' style={styleAhorcado.cartelGameOver}>
          <Col className='d-flex flex-column align-items-center justify-content-center'>
            <h1 className='mb-4 text-success'>HAS GANADO</h1>
            <h2 style={{ wordBreak: 'break-all' }}>FRASE: {phrase}</h2>
            <CustomButton onClick={() => resetGame({ setError, setLetras, setPhrase })}>Reinciar</CustomButton>
          </Col>
        </Container>
                }

    </Container>
  )
}
