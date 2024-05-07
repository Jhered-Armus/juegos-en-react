import { Routes, BrowserRouter, Route } from 'react-router-dom'
import { TicTacToe } from '../Game-TicTacToe'
import { GameHorcado } from '../Game-Horcado'

export function RoutePage () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TicTacToe />} />
        <Route path='/Game-horcado' element={<GameHorcado />} />
      </Routes>
    </BrowserRouter>
  )
}
