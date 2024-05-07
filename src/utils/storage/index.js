export function saveGameTicTacToe ({ board, turn, winner }) {
  window.localStorage.setItem('board', JSON.stringify(board))
  window.localStorage.setItem('turn', turn)
  window.localStorage.setItem('winner', winner)
}

export function resetGameStorageTicTacToe () {
  window.localStorage.removeItem('turn')
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('winner')
}
