export const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`

  const handlerCLick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handlerCLick} className={className}>
      {children}
    </div>
  )
}
