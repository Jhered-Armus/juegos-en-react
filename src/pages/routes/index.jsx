import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { TicTacToe } from '../Game-TicTacToe'
import { GameAhorcado } from '../GameAhorcado'

export function RoutePage () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TicTacToe />} />
        <Route path='/game-horcado' element={<GameAhorcado />} />
      </Routes>
    </BrowserRouter>
  )
}
