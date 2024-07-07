import { Button } from 'react-bootstrap'
import styleCustom from '../style/tic-tac-toe'
import React, { useState } from 'react'

export function CustomButton ({ children, icon, ...props }) {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <Button
      variant='none'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        ...styleCustom.button,
        ...(isHovering && styleCustom.buttonHover)
      }}
      {...props}
    >
      {icon && <img src={icon} alt='' width='20' height='20' />}
      {children}
    </Button>
  )
}
