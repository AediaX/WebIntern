const cells = document.querySelectorAll(".cell");
const statusText = document.getElementById("status");

let board = Array(9).fill("");
let gameOver = false;

const HUMAN = "X";
const AI = "O";

const winPatterns = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

// Click events
cells.forEach(cell => cell.addEventListener("click", humanMove));

function humanMove() {
    const index = this.dataset.index;
    if (board[index] || gameOver) return;

    playMove(index, HUMAN);
    if (!gameOver) setTimeout(aiMove, 400);
}

// Core move function
function playMove(index, player) {
    board[index] = player;
    cells[index].innerText = player;
    cells[index].classList.add(player);

    checkResult(player);
}

// AI move logic
function aiMove() {
    let move =
        findWinningMove(AI) ||
        findWinningMove(HUMAN) ||
        (board[4] === "" ? 4 : null) ||
        findCorner() ||
        board.findIndex(cell => cell === "");

    playMove(move, AI);
}

// Find winning or blocking move
function findWinningMove(player) {
    for (let pattern of winPatterns) {
        let [a,b,c] = pattern;
        let values = [board[a], board[b], board[c]];

        if (values.filter(v => v === player).length === 2 && values.includes("")) {
            return pattern[values.indexOf("")];
        }
    }
    return null;
}

// Find available corner
function findCorner() {
    const corners = [0,2,6,8];
    return corners.find(i => board[i] === "") ?? null;
}

// Check result
function checkResult(player) {
    for (let pattern of winPatterns) {
        let [a,b,c] = pattern;
        if (board[a] === player && board[b] === player && board[c] === player) {
            pattern.forEach(i => cells[i].classList.add("win"));
            statusText.innerText = player === HUMAN ? "You Win 🎉" : "AI Wins 🤖";
            gameOver = true;
            return;
        }
    }

    if (!board.includes("")) {
        statusText.innerText = "Draw 🤝";
        gameOver = true;
        return;
    }

    statusText.innerText = player === HUMAN ? "AI Thinking..." : "Your Turn (X)";
}

// Restart
function restart() {
    board = Array(9).fill("");
    gameOver = false;
    statusText.innerText = "Your Turn (X)";
    cells.forEach(cell => {
        cell.innerText = "";
        cell.className = "cell";
    });
}
