const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

// Winning positions
const winningPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

// Add click event to each cell
cells.forEach(cell => {
    cell.addEventListener("click", handleClick);
});

// Handle cell click
function handleClick() {
    const index = this.getAttribute("data-index");

    // Prevent invalid moves
    if (board[index] !== "" || gameOver) return;

    // Update board & UI
    board[index] = currentPlayer;
    this.innerText = currentPlayer;
    this.classList.add(currentPlayer);

    // Check game status
    checkResult();
}

// Check winner or draw
function checkResult() {
    // Check winner
    for (let pattern of winningPatterns) {
        let [a, b, c] = pattern;

        if (
            board[a] &&
            board[a] === board[b] &&
            board[a] === board[c]
        ) {
            message.innerText = `Player ${board[a]} Wins 🎉`;
            gameOver = true;
            return;
        }
    }

    // Check draw
    if (!board.includes("")) {
        message.innerText = "It's a Draw 🤝";
        gameOver = true;
        return;
    }

    // Switch player
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    message.innerText = `Player ${currentPlayer} Turn`;
}

// Restart game
function restartGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameOver = false;
    message.innerText = "Player X Turn";

    cells.forEach(cell => {
        cell.innerText = "";
        cell.classList.remove("X", "O");
    });
}
