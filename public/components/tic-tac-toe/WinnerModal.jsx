import styleCustom from '../../style/tic-tac-toe'
import { CustomButton } from '../Button'
import { Square } from './Square'
import React from 'react'

export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Empate' : 'Gano'

  return (
    <section style={styleCustom.winner}>
      <div style={styleCustom.winner.text}>
        <h2>
          {winnerText}
        </h2>
        <header className='win'>
          {winner && <Square>{winner}</Square>}
        </header>

        <footer>
          <CustomButton onClick={resetGame}>Empezar de nuevo</CustomButton>
        </footer>
      </div>
    </section>
  )
}
