import React, { useState } from 'react'
import { TURNS } from '../utils/CONST_GAME.JS'
import { checkEndGame, checkWinnerFrom } from '../utils/check_Game_tictactoe'
import { saveGameTicTacToe } from '../utils/storage/localStorage_TicTacToe'
import { Square } from '../components/tic-tac-toe/Square'
import { Col, Container, Row } from 'react-bootstrap'
import { WinnerModal } from '../components/tic-tac-toe/WinnerModal'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../style/colors'
import { CustomButton } from '../components/Button'

export function TicTacToe () {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  }

  )
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.x
  })

  const [winner, setWinner] = useState(() => {
    const winnerFromStorage = window.localStorage.getItem('winner')
    if (winnerFromStorage === 'null') return null
    return winnerFromStorage
  })

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
    // resetGameStorageTicTacToe()
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setTurn(newTurn)
    // reivisar si hay un ganador
    let newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      // confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
      newWinner = false
    }
    // Guardar partida
    saveGameTicTacToe({
      board: newBoard,
      turn: newTurn,
      winner: newWinner
    })
  }

  return (
    <main style={{ textAlign: 'center', background: SECONDARY_COLOR, marginTop: '16px' }}>
      <Container>
        <Row className='mb-3'>
          <Col>
            <h1 style={{ color: PRIMARY_COLOR, marginBottom: '16px' }}>Tic Tac Toe</h1>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col className=' d-flex justify-content-center'>
            <CustomButton onClick={resetGame}>
              Reset Game
            </CustomButton>
          </Col>
        </Row>
        <Row className='mb-3'>
          {/* <Col><h3>Ganador de la partida anterior: {winnerFromStorage ?? '-'}</h3></Col> */}
        </Row>
        <Row className='mb-3'>
          <Col>
            <Container className='d-grid bg-gray' style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', maxWidth: '300px', margin: '0 auto' }}>
              {board.map((square, index) => (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {square}
                </Square>
              ))}
            </Container>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col className='d-flex justify-content-center gap-3'>
            <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
            <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
          </Col>
        </Row>
        <Row className='mb-3'>
          <Col>
            <WinnerModal resetGame={resetGame} winner={winner} />
          </Col>
        </Row>
      </Container>
    </main>
  )
}
