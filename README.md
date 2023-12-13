# knights-travails

This *knightMoves* method takes two parameters start and end, representing the starting and ending squares on the chessboard. It uses BFS to explore possible moves from the starting square until it reaches the destination square. The function returns an array representing the shortest path from the starting square to the destination square.

The visited set is used to keep track of visited nodes to avoid revisiting them. The queue is a queue of nodes to visit along with their paths.

In the example usage, it creates a ChessboardGraph instance, defines the start and end squares, and then calls the *knightMoves* method to find the shortest path. The result is logged to the console. Note that the result will be an array of squares representing the path, including both the start and end squares. If the result is an empty array, no path is found.