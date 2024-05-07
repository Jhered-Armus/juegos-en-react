import { useState } from 'react'
import { Square } from '../components/tic_tac_toe/Square'
import { WinnerModal } from '../components/tic_tac_toe/WinnerModal'
import { TURNS } from '../utils/CONTS_GAME_TICTACTOE'
import { checkEndGame, checkWinnerFrom } from '../utils/board_tictactoe'
import { resetGameStorageTicTacToe, saveGameTicTacToe } from '../utils/storage'
import confetti from 'canvas-confetti'
import '../styles/game_tictactoe.css'

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

  // const [winner, setWinner] = useState(null)
  // const winnerStorage=window.localStorage.getItem('winner');

  const [winner, setWinner] = useState(() => {
    const winnerFromStorage = window.localStorage.getItem('winner')
    if (winnerFromStorage === 'null') return null
    return winnerFromStorage
  })

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
    resetGameStorageTicTacToe()
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
      confetti()
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
    <main className='board'>
      <button onClick={resetGame}>Reset Game</button>
      <h1>Tic Tac Toc</h1>
      {/* <h3>Ganador de la partida anterior: {winnerFromStorage??'-'}</h3> */}
      <section className='game'>
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.x}>
          {TURNS.x}
        </Square>
        <Square isSelected={turn === TURNS.o}>
          {TURNS.o}
        </Square>
      </section>
      <WinnerModal resetGame={resetGame} winner={winner} />
    </main>

  )
}
