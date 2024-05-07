export const GenButton = ({ handlerClick, statusButton }) => {
  const letras = 'QWERTYUIOPASDFGHJKLÑZXCVBNM'.split('')

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
