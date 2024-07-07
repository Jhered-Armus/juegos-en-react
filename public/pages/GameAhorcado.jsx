import React, { useState } from 'react'
import { comprobacionDeTexto } from '../utils/gameAhorcadoFunciones'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../style/colors'
import { Col, Container, Row } from 'react-bootstrap'
import { CustomButton } from '../components/Button'
import { BoardAhorcado } from '../components/ahorcado/BoardAhorcado'
import { styleAhorcado } from '../style/ahorcado'

export function GameAhorcado () {
  const [errores, setError] = useState(0)
  const [phrase, setPhrase] = useState('')

  const phraseSet = () => setPhrase(comprobacionDeTexto)

  return (
    <main style={{ textAlign: 'center', background: SECONDARY_COLOR, height: '100vh', overflow: 'hidden' }}>
      <Row className='mb-3'>
        <h1 style={{ color: PRIMARY_COLOR, marginBottom: '16px' }}>Ahorcado</h1>
        <Col className='d-flex align-items-center'>
          <Container
            className='d-flex flex-column align-items-center p-3 bg-info bg-opacity-10 border border-info rounded-4'
            style={{ width: '400px', height: '200px' }}
          >
            <h1 style={{ textAlign: 'center', fontSize: '1.7em', marginBottom: '20px' }}>Limite de errores 6</h1>
            <h2 style={{ textAlign: 'center', fontSize: '1.5em', marginBottom: '20px' }}>❌ Errores: {errores}</h2>
            <CustomButton onClick={phraseSet}>Establecer Frase</CustomButton>
          </Container>
        </Col>
        <Col xs={7}>
          <Container style={{ maxHeigth: '300px', height: '300px', padding: '40px', position: 'relative' }}>
            <div style={styleAhorcado.horca.pole1} />
            <div style={styleAhorcado.horca.pole2} />
            <div style={styleAhorcado.horca.pole3} />
            {errores >= 1 && <div style={styleAhorcado.stickMan.head} />}
            {errores >= 2 && <div style={styleAhorcado.stickMan.torso} />}
            {errores >= 3 && <div style={styleAhorcado.stickMan.leftArm} />}
            {errores >= 4 && <div style={styleAhorcado.stickMan.rightArm} />}
            {errores >= 5 && <div style={styleAhorcado.stickMan.leftLeg} />}
            {errores >= 6 && <div style={styleAhorcado.stickMan.rightLeg} />}
          </Container>
        </Col>
        <Row>
          <Container style={{ maxWidth: '60%' }}>
            {phrase != null && <BoardAhorcado
              phrase={phrase.toLocaleUpperCase()}
              errores={errores}
              setError={setError}
              setPhrase={setPhrase}
                               />}
          </Container>
        </Row>
      </Row>
    </main>
  )
}
