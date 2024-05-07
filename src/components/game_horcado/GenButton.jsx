import { useEffect } from 'react'

export const GenButton = ({ handlerClick, statusButton }) => {
  const letras = 'QWERTYUIOPASDFGHJKLÑZXCVBNM'.split('')

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase()
      if (letras.includes(key)) {
        handlerClick(key)
      }
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [handlerClick, statusButton, letras])

  return (
    <div className='tableroBotones'>
      {
          letras.map((letter, index) => (
            <button
              onClick={() => handlerClick(letter)}
              key={index}
              disabled={statusButton[letter]}
            >{letter}
            </button>
          ))
        }
    </div>
  )
}
