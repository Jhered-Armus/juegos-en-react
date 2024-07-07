import { GRID_SIZE, MOVE } from './CONST_GAME.JS'

function createGrid () {
  const grid = []
  for (let i = 0; i < GRID_SIZE; i++) {
    grid.push(Array(GRID_SIZE).fill('.'))
  }
  return grid
}

function moveSnake ({ snake, direction, food, grid, setSnake, setFood, setGrid, setGameOver, directionRef }) {
  const head = { ...snake[0] }
  const newDirection = direction
  switch (newDirection) {
    case MOVE.UP:
      head.y--
      break
    case MOVE.DOWN:
      head.y++
      break
    case MOVE.LEFT:
      head.x--
      break
    case MOVE.RIGHT:
      head.x++
      break
    default:
      break
  }
  directionRef.current = direction

  if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
    setGameOver(true)
    return
  }

  if (snake.some(part => part.x === head.x && part.y === head.y)) {
    setGameOver(true)
  }

  const newSnake = [{ ...head }, ...snake.slice(0, -1)]

  if (food && head.x === food.x && head.y === food.y) {
    setSnake([head, ...snake])
    setFood(generateFood({ snake }))
  } else {
    setSnake(newSnake)
  }

  const newGrid = [...grid]
  newSnake.forEach(part => {
    newGrid[part.y][part.x] = 'S'
  })
  if (food) {
    newGrid[food.y][food.x] = 'F'
  }
  newGrid[snake[snake.length - 1].y][snake[snake.length - 1].x] = '.'
  setGrid(newGrid)
}

function generateFood ({ snake }) {
  let x, y
  do {
    x = Math.floor(Math.random() * GRID_SIZE)
    y = Math.floor(Math.random() * GRID_SIZE)
  } while (snake.some(part => part.x === x && part.y === y))
  return { x, y }
}

function togglePause ({ setGamePaused }) {
  setGamePaused(prevPaused => !prevPaused)
}
function startGame ({ setGameStarted }) {
  setGameStarted(true)
}

function restartGame ({ snake, setGameOver, setSnake, setDirection, setFood, setGrid, setGamePaused, setGameStarted }) {
  setGameOver(false)
  setSnake([{ x: 10, y: 10 }])
  setDirection(MOVE.RIGHT)
  setFood(generateFood({ snake }))
  setGrid(createGrid())
  setGamePaused(prevPaused => prevPaused)
  setGameStarted(false)
}

export { createGrid, moveSnake, generateFood, togglePause, startGame, restartGame }
