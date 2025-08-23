//Paradigmas de Programacion (Teorico)
//Tipos de Programacion (Implementacion de paradigma)
//Lenguajes que soportan paradigmas de programacion

//Clase (Abstracta) -> Molde para la creacion de obejetos
//Objeto (Concreto) -> Instancia de una clase

class TicTacToe{
    //Celdas - Puntaje - Jugador actual
    //nuevo juego y reset

    constructor(){
        this.board = Array(9).fill("");
        this.scores = {
            X: 0,
            O: 0
        }
        this.currentPlayer = "X";
        this.gameActive = true;
        this.winningConditions = [
            [0, 1, 2],[3, 4, 5],[6, 7, 8], //Filas
            [0, 3, 6],[1, 4, 7],[2, 5, 8], //Columnas
            [0, 4, 8],[2, 4, 6] //Diagonales
        ];

        this.initGame();
    }

    initGame(){
        this.cells = document.querySelectorAll(".cell");
        this.currentPlayerDisplay = document.getElementById("current-player");
        this.gameStatus = document.getElementById("game-status");
        this.resetBtn = document.getElementById("reset-btn");
        //Crear todas las variables que representan un elemento dentro de html
        this.newGameBtn = document.getElementById("new-game-btn");
        this.scoreX = document.getElementById("score-x");
        this.scoreO = document.getElementById("score-o");

        this.createEventListeners();
        this.updateDisplay();
    }
}

function nombreFuncion (){
    //Codigo
}

//DOM -> Document Object Model
document.addEventListener("DOMContentLoaded", ()=>{
    new TicTacToe(); //Creacion de objeto
})

