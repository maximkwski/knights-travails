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

    knightMoves(start, end) {
        const startNode = { row: start[0], col: start[1] };
        const endNode = { row: end[0], col: end[1] };
    
        const visited = new Set();
        const queue = [[startNode, []]]; // Queue of nodes to visit along with their path
    
        while (queue.length > 0) {
          const [currentNode, path] = queue.shift();
    
          if (currentNode.row === endNode.row && currentNode.col === endNode.col) {
            // Found the destination, return the path
            return [...path, endNode];
          }
    
          if (!visited.has(currentNode.row * this.size + currentNode.col)) {
            visited.add(currentNode.row * this.size + currentNode.col);
    
            for (const neighbor of this.graph[currentNode.row * this.size + currentNode.col] || []) {
              const newPath = [...path, currentNode];
              queue.push([neighbor, newPath]);
            }
          }
        }
    
        // If no path is found
        return [];
      }
}

const chessboard = new ChessboardGraph(8)
const startSquare = [0, 0]
const endSquare = [2, 3]

// Access the graph (adjacency list)
// console.log(chessboard.graph);

const shortestPath = chessboard.knightMoves(startSquare, endSquare);
console.log(shortestPath);


