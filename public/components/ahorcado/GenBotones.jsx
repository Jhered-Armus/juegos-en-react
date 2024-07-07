import React, { useEffect } from 'react'
import { CustomButton } from '../Button'
import { Container } from 'react-bootstrap'

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
    <Container className='d-flex flex-wrap justify-content-center gap-2 mt-5' style={{ maxWidth: '700px' }}>
      {
            letras.map((letter, index) => (
              <CustomButton
                onClick={() => handlerClick(letter)}
                key={index}
                disabled={statusButton[letter]}
              >{letter}
              </CustomButton>
            ))
          }
    </Container>
  )
}
