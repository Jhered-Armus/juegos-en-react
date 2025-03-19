// Game Tic Tac Toe
export const TURNS = {
  x: 'x',
  o: '0'
}

export const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

// Game Snke
export const GRID_SIZE = 20

export const MOVE = {
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'rigth',
  ENTER: 'enter'
}

export const imgButton = {
  play: 'https://cdn.icon-icons.com/icons2/902/PNG/512/play-button_icon-icons.com_69323.png',
  pause: 'https://cdn.icon-icons.com/icons2/2459/PNG/512/multimedia_pause_button_icon_149073.png',
  restart: 'https://cdn.icon-icons.com/icons2/3900/PNG/512/reset_icon_246246.png'
}

export const games = [
  {
    name: 'Tic Tac Toe',
    description: 'Clásico juego de mesa donde dos jugadores compiten por colocar tres fichas en línea.',
    image: '../assets/img/img_game_tictactoe.JPG',
    path: '/tic-tac-toe'
  },
  {
    name: 'Ahorcado',
    description: 'Juego de palabras donde debes adivinar la palabra oculta antes de que se complete el dibujo de un ahorcado.',
    image: '../assets/img/img_game_ahorcado.JPG',
    path: '/ahorcado'
  },
  {
    name: 'Snake',
    description: 'Juego de habilidad donde debes guiar una serpiente en constante crecimiento a través de un laberinto, evitando chocar contra las paredes o contra tu propia cola.',
    image: '../assets/img/img_game_snake.JPG',
    path: '/snake'
  },
  {
    name: 'Memory',
    description: 'Juego de memoria donde debes emparejar tarjetas con imágenes idénticas, volteándolas una a una y tratando de recordar su ubicación.',
    image: '../assets/img/img_game_memory.JPG',
    path: '/memory'
  }
]
