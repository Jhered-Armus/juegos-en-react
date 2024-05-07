import { useState } from 'react'
import { gameOver, resetGame, winner } from '../../utils/fcWinRest'
import { GenButton } from './GenButton'

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
    <>
      <div className='tablero'>
        {
                letterArray.map((space, index, array) => (
                  <span
                    key={index}
                    className='espacio' style={{ marginRight: index === array.length - 1 ? '0' : '0.5em' }}
                  >{letrasAdivinadas[space] ? space : (space === ' ' ? ' ' : '_')}
                  </span>
                ))
              }
        {gameOver(errores) &&
          <div className='cnGameOver'>
            <h1>Game Over</h1>
            <button onClick={() => resetGame({ setError, setLetras, setPhrase })}>Reinciar</button>
          </div>}
        {
              (winner({ phrase, objPhrase: letrasAdivinadas }) && phrase !== '') &&
                <div className='cnGameOver'>
                  <h1>Has Ganado</h1>
                  <h2>La frase fue: {phrase}</h2>
                  <button onClick={() => resetGame({ setError, setLetras, setPhrase })}>Reinciar</button>
                </div>
              }
      </div>
      {phrase.trim() && <GenButton
        handlerClick={handlerClick}
        statusButton={letrasAdivinadas}
                        />}
    </>
  )
}
