class Snake {
  constructor() {
    this.length = 0
    this.eaten = 0
    this.position = {
      x: 0, y: 0
    }
  }
  addBoard(board) {
    this.board = board
  }
  moveLeft() {
    this.position.x += 1
    this.board[this.position.x][this.position.y] += 1
  }
  moveRight() {
    this.position.y += 1
    this.board[this.position.x][this.position.y] += 1
  }
}

class Board {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.board = []
    Array(width).fill(0).forEach((space) => {
      this.board.push(Array(height).fill(0))
    })
  }

  addSnake(snake) {
    this.snake = snake
    this.snake.addBoard(this.board)
  }

  occupy (){}
}

const b = new Board(5, 5)
const s = new Snake()

b.addSnake(s)

for (const x of Array(20).fill(0)) {
  console.log(b.board)
  s.moveLeft()
  s.moveLeft()
  s.moveRight()
}