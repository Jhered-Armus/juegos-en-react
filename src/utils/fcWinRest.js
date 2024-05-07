export function winner ({ phrase, objPhrase }) {
  const letrasAdivinadas = new Set()
  for (const item in objPhrase) {
    if (objPhrase[item]) { letrasAdivinadas.add(item) }
  }
  const letrasDeLaFrase = new Set(phrase.replace(/\s/g, ''))
  return letrasAdivinadas.size === letrasDeLaFrase.size
}

export const gameOver = (nErroes) => (nErroes >= 6)

export const comprobacionDeTexto = () => {
  let texto

  do {
    texto = window.prompt('Introduce solo texto:')

    if (texto === null) {
      console.log('El usuario canceló la entrada.')
      return texto
    } else if (!/^[a-zA-Z\s]+$/.test(texto.trim())) {
      // eslint-disable-next-line
      alert('Por favor, introduce solo texto (letras y espacios).')
    }
  } while (!/^[a-zA-Z\s]+$/.test(texto.trim()))

  if (texto !== null) {
    console.log('¡El texto ingresado es: ' + texto + '!')
    return texto
  }
}

export const resetGame = ({ setError, setLetras, setPhrase }) => {
  setError(0)
  setLetras({})
  setPhrase(null)
}
