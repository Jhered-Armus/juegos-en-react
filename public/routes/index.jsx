import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { TicTacToe } from '../pages/GameTicTacToe'
import { GameAhorcado } from '../pages/GameAhorcado'
import { GameSnake } from '../pages/GameSnake'
import { GameMemorize } from '../pages/GameMemorize'
export function RoutesPage () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tic-tac-toe' element={<TicTacToe />} />
        <Route path='/ahorcado' element={<GameAhorcado />} />
        <Route path='/snake' element={<GameSnake />} />
        <Route path='/memorise' element={<GameMemorize />} />
      </Routes>
    </BrowserRouter>
  )
}
