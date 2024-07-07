/* eslint-disable multiline-ternary */
import React, { useEffect, useRef, useState } from 'react'
import { createGrid, generateFood, moveSnake, restartGame, startGame, togglePause } from '../utils/movesAndActionSnake'
import { MOVE, imgButton } from '../utils/CONST_GAME.JS'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { RenderGrid } from '../components/snake/GameRenderSnake'
import { CustomButton } from '../components/Button'
import { PRIMARY_COLOR } from '../style/colors'
import styleSnanke from '../style/snake'
export function GameSnake () {
  const [grid, setGrid] = useState(createGrid())
  const [snake, setSnake] = useState([{ x: 10, y: 10 }])
  const [direction, setDirection] = useState(MOVE.RIGHT)
  const [food, setFood] = useState(null)
  const [gameOver, setGameOver] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [gamePaused, setGamePaused] = useState(false)
  const directionRef = useRef(direction)
  const [points, setPoints] = useState(0)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    function handleKeyDown (e) {
      if (e.key === 'ArrowUp' && directionRef.current !== MOVE.DOWN) {
        setDirection(MOVE.UP)
      }
      if (e.key === 'ArrowDown' && directionRef.current !== MOVE.UP) {
        setDirection(MOVE.DOWN)
      }
      if (e.key === 'ArrowLeft' && directionRef.current !== MOVE.RIGHT) {
        setDirection(MOVE.LEFT)
      }
      if (e.key === 'ArrowRight' && directionRef.current !== MOVE.LEFT) {
        setDirection(MOVE.RIGHT)
      } if (e.key === 'Enter') {
        startGame({
          setGameStarted
        })
      }

      if (e.key === 'p' || e.key === 'P') {
        togglePause({ setGamePaused })
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [direction])

  useEffect(() => {
    if (gameStarted && !gamePaused) {
      let intervalId
      if (!gameOver) {
        const speed = snake.length > 5 ? 100 : 200
        intervalId = setInterval(() => {
          moveSnake({ snake, direction, food, grid, setSnake, setFood, setGrid, setGameOver, directionRef })
        }, speed)
      }
      return () => clearInterval(intervalId)
    }
  }, [snake, direction, gameOver])

  useEffect(() => {
    setFood(generateFood({ snake }))
  }, [])

  useEffect(() => {
    if (food) {
      const newGrid = [...grid]
      newGrid[food.y][food.x] = '🐀'
      setGrid(newGrid)
    }
  }, [food])

  useEffect(() => {
    if (!snake.length) return
    const newGrid = [...grid]
    snake.forEach(part => {
      newGrid[part.y][part.x] = '◾'
      setPoints(snake.length - 1)
    })
    if (food) {
      newGrid[food.y][food.x] = '🐀'
    }
    setGrid(newGrid)
  }, [snake, food])

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 960) // 768px es el ancho de pantalla mínimo recomendado para el juego
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <div className='flex-grow-1'>
      {isSmallScreen ? (
        <Container className='text-center'>
          <h1 style={{ color: PRIMARY_COLOR, marginBottom: '16px' }}>
            Lo sentimos
          </h1>
          <p>Este juego no está disponible o optimizado para celulares o pantallas pequeñas.</p>
        </Container>
      ) : (
        <Container>
          <Row className='justify-content-center'>
            <h1 style={{ color: PRIMARY_COLOR, marginBottom: '16px', textAlign: 'center' }}>
              Snake
            </h1>
            <Col xs={12} md={8}>
              <RenderGrid grid={grid} />
              {gameOver && (
                <Container style={styleSnanke.gameOver} className='border-info'>
                  <h3>Game Over</h3>
                  <CustomButton
                    icon={imgButton.restart}
                    onClick={() =>
                      restartGame({
                        snake,
                        setGameOver,
                        setSnake,
                        setDirection,
                        setFood,
                        setGrid,
                        setGamePaused,
                        setGameStarted
                      })}
                  />
                </Container>
              )}
            </Col>
            <Col>
              {!gameStarted && !gameOver && ( // Mostrar el botón de inicio si el juego no ha comenzado y no ha terminado
                <CustomButton icon={imgButton.play} onClick={() => startGame({ setGameStarted })}>Empezar</CustomButton>
              )}
              {gameStarted && !gameOver && ( // Mostrar el botón de pausa si el juego ha comenzado y no ha terminado
                <CustomButton icon={gamePaused ? imgButton.play : imgButton.pause} onClick={() => togglePause({ setGamePaused })}>{gamePaused ? 'Resume' : 'Pausa'}</CustomButton>

              )}
              <Card className='text-center mt-3' style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title>Puntos</Card.Title>
                  <Card.Text>{points}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  )
}
