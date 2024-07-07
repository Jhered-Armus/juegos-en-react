import React from 'react'
import styleCustom from '../../style/tic-tac-toe'

export const Square = ({ children, isSelected, updateBoard, index }) => {
  const style = {
    ...styleCustom.square,
    ...(isSelected && styleCustom.square.isSelected)
  }

  const handlerCLick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handlerCLick} style={style}>
      {children}
    </div>
  )
}
