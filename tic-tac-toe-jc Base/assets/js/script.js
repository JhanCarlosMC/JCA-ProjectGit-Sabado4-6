//Paradigmas de Programacion (Teorico)
//Tipos de Programacion (Implementacion de paradigma)
//Lenguajes que soportan paradigmas de programacion

//Clase (Abstracta) -> Molde para la creacion de obejetos
//Objeto (Concreto) -> Instancia de una clase

class TicTacToe {
    //Celdas - Puntaje - Jugador actual
    //nuevo juego y reset

    constructor() {
        this.board = Array(9).fill("");
        this.scores = {
            X: 0,
            O: 0
        }
        this.currentPlayer = "X";
        this.gameActive = true;
        this.winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], //Filas
            [0, 3, 6], [1, 4, 7], [2, 5, 8], //Columnas
            [0, 4, 8], [2, 4, 6] //Diagonales
        ];

        this.initGame();
    }

    initGame() {
        this.cells = document.querySelectorAll(".cell");
        this.currentPlayerDisplay = document.getElementById("current-player");
        this.gameStatus = document.getElementById("game-status");
        this.resetBtn = document.getElementById("reset-btn");
        //Crear todas las variables que representan un elemento dentro de html
        this.newGameBtn = document.getElementById("new-game-btn");
        this.scoreX = document.getElementById("score-x");
        this.scoreO = document.getElementById("score-o");

        this.titulo = document.getElementById("titulo");
        this.titulo.textContent = "Tateti";
        this.titulo.addEventListener("click", () =>{
            this.titulo.innerHTML = "Codigo html";
            
            let div = document.createElement("div");
            div.textContent = "Nuevo Div";
            this.titulo.appendChild(div);

        });

        this.createEventListeners();
        this.updateDisplay();
    }

    createEventListeners() {
        this.newGameBtn.addEventListener("click", this.newGame.bind(this));
        this.resetBtn.addEventListener("click", this.resetGame.bind(this));

        this.cells.forEach(cell => {
            cell.addEventListener("click", this.handleCellClick.bind(this));
        })
    }

    handleCellClick(event) {
        const cell = event.target;
        const index = parseInt(cell.getAttribute("data-index"));

        if (this.board[index] !== "" || !this.gameActive) {
            return;
        }
        this.makeMove(cell, index);
    }

    updateDisplay() {
        this.currentPlayerDisplay.textContent = this.currentPlayer;
        this.currentPlayerDisplay.style.color = (this.currentPlayer === "X") ? "red" : "blue";
    }

    makeMove(cell, index) {
        this.board[index] = this.currentPlayer;
        cell.textContent = this.currentPlayer;
        cell.classList.add(this.currentPlayer.toLowerCase());

        if (this.checkWinner()) {
            this.handleGameEnd("win");
        } else if (this.checkDraw()) {
            this.handleGameEnd("draw");
        } else {
            this.switchPlayer();
        }
    }

    checkWinner() {
        for (let condition of this.winningConditions) {
            const [a, b, c] = condition;
            if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
                return true;
            }
        }
        return false;
    }

    checkDraw() {
        return this.board.every(cell => cell !== "");
    }

    handleGameEnd(result) {
        this.gameActive = false;

        if (result === "win") {
            this.scores[this.currentPlayer]++;
            this.gameStatus.textContent = `El ganador es ${this.currentPlayer}, Felicidades!!!`;
            this.gameStatus.className = "game-status winner"
        } else {
            this.gameStatus.textContent = "Empate!";
            this.gameStatus.className = "game-status draw"
        }

        this.updateScoresDisplay();
    }

    updateScoresDisplay(){
        this.scoreX.textContent = this.scores["X"];
        this.scoreO.textContent = this.scores["O"];
    }

    switchPlayer() {
        this.currentPlayer = (this.currentPlayer === "X") ? "O" : "X";
        this.updateDisplay();
    }

    resetGame() {
        this.board = Array(9).fill("");
        this.gameActive = true;
        this.gameStatus.textContent = "";
        this.gameStatus.className = "game-status";
        this.currentPlayer = "X";

        this.cells.forEach(cell => {
            cell.textContent = "";
            cell.classList.remove("x", "o");
        });

        this.updateDisplay();
    }

    newGame() {
        this.resetGame();
        this.scores = {
            X: 0,
            O: 0
        }
        this.updateScoresDisplay();
    }
}

//DOM -> Document Object Model
document.addEventListener("DOMContentLoaded", () => {
    new TicTacToe(); //Creacion de objeto
    // testArreglo();
})

function testArreglo() {
    let frutas = ["Pera", "Manzana", "Platano", "Uva"];
    console.log(frutas);
    console.log(frutas[0]);
    console.log(frutas[1]);
    console.log(frutas[2]);
    console.log(frutas[3]);

    console.log(frutas.length);

    frutas.push("Sandia"); //Agrega al final
    console.log(frutas);
    frutas.pop(); //Elimina el ultimo
    console.log(frutas);

    frutas.unshift("Kiwi"); //Agrega al inicio
    console.log(frutas);
    frutas.shift(); //Elimina el primero
    console.log(frutas);
}