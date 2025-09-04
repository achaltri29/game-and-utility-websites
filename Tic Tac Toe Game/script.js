const gameBoard = document.getElementById('gameBoard');
const message = document.getElementById('message');
const newGameButton = document.getElementById('newGameButton');
const overlay = document.getElementById('overlay');
const overlayContent = document.getElementById('overlayContent');
const playAgainButton = document.getElementById('playAgainButton');

let currentPlayer = 'X';
let board = Array(9).fill(null);

function createBoard() {
    gameBoard.innerHTML = '';
    board.forEach((_, i) => {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        cell.addEventListener('click', handleCellClick);
        gameBoard.appendChild(cell);
    });
}

function handleCellClick(event) {
    const cell = event.target;
    const index = cell.dataset.index;

    if (board[index] || checkWinner()) {
        return;
    }

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add('taken');

    if (checkWinner()) {
        showOverlay(`Player ${currentPlayer} Wins!`);
        return;
    }

    if (board.every(cell => cell)) {
        showOverlay("It's a Draw!");
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    message.textContent = `Player ${currentPlayer}'s Turn`;
}

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function showOverlay(message) {
    overlay.style.display = 'flex';
    overlayContent.textContent = message;
}

function hideOverlay() {
    overlay.style.display = 'none';
    resetGame();
}

function resetGame() {
    currentPlayer = 'X';
    board = Array(9).fill(null);
    message.textContent = `Player X's Turn`;
    createBoard();
}

newGameButton.addEventListener('click', resetGame);
playAgainButton.addEventListener('click', hideOverlay);

createBoard();
