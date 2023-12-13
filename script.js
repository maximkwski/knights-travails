class ChessboardGraph {
    constructor(size) {
        this.size = size
        this.board = this.createEmptyBoard()
        this.graph = this.createEmptyGraph()
        this.createGraph()
    }

    createEmptyBoard() {
        const board = new Array(this.size)
        .fill(null)
        .map(() => new Array(this.size)
        .fill(null))

        return board
    }

    createEmptyGraph() {
        const graph = {};
        return graph;
      }

    createGraph() {
        for (let row = 0; row < this.size; row++) {
            for (let col = 0; col < this.size; col++) {
                this.addKnightMoves(row,col)
            }
        }
    }

    isValidMove(row, col) {
        return row >= 0 && col >= 0 && row < this.size && col < this.size
    }

    addKnightMoves(row, col) {
        const moves = [
            { row: row + 2, col: col + 1 },
            { row: row + 2, col: col - 1 },
            { row: row - 2, col: col + 1 },
            { row: row - 2, col: col - 1 },
            { row: row + 1, col: col + 2 },
            { row: row + 1, col: col - 2 },
            { row: row - 1, col: col + 2 },
            { row: row - 1, col: col - 2 },
        ]

        for (const move of moves) {
            const { row: newRow, col: newCol } = move
            if (this.isValidMove(newRow, newCol)) {
                this.addEdge( { from: { row, col }, to: { row: newRow, col: newCol } })
            }
        }
    }

    addEdge({ from, to }) {
        if (!this.graph[from.row * this.size + from.col]) {
            this.graph[from.row * this.size + from.col] = []
        }
        this.graph[from.row * this.size + from.col].push(to)
    }
}

const chessboard = new ChessboardGraph(8)