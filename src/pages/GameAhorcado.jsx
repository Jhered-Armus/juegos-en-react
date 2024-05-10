import { useState } from 'react'
import { BoardAhorcado } from '../components/game_horcado/GameBoard'
import { comprobacionDeTexto } from '../utils/fcWinRest'
import '../styles/game_ahorcado.css'

export function GameAhorcado () {
  const [errores, setError] = useState(0)
  const [phrase, setPhrase] = useState(null)

  const phraseSet = () => setPhrase(comprobacionDeTexto)

  return (
    <main>
      <section>
        <h1 className='title'>Juego del Ahorcado</h1>
        <div className='ponins-hangaman'>
          <div className='ponints'>
            <h1>Limite de errores 6</h1>
            <h2>❌ Errores: {errores}</h2>
            <button onClick={phraseSet}>Establecer Frase</button>
          </div>
          <div className='hangman'>
            <div className='pole-1' />
            <div className='pole-2' />
            <div className='pole-3' />
            {errores >= 1 && <div className='head' />}
            {errores >= 2 && <div className='torso' />}
            {errores >= 3 && <div className='left-arm' />}
            {errores >= 4 && <div className='right-arm' />}
            {errores >= 5 && <div className='left-leg' />}
            {errores >= 6 && <div className='right-leg' />}
          </div>
        </div>
        {phrase != null && <BoardAhorcado
          phrase={phrase.toLocaleUpperCase()}
          errores={errores}
          setError={setError}
          setPhrase={setPhrase}
                           />}

      </section>
    </main>
  )
}
