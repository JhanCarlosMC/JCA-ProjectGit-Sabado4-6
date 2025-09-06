let contador = 0;
const LIMIT_MAX = 10;
const LIMIT_MIN = -10;

const contadorElement = document.getElementById('contador');
const btnIncrementar = document.getElementById('incrementar');
const btnDecrementar = document.getElementById('decrementar');
const btnReset = document.getElementById('reset');
const mensajeElement = document.getElementById('mensaje');

btnIncrementar.addEventListener("click",incrementar);

function incrementar(){
	if(contador < LIMIT_MAX){
		contador ++;
	    actualizarVisual();
	}
}

btnDecrementar.addEventListener("click",decrementar);

function decrementar(){
	if(contador > LIMIT_MIN){
		contador --;
	    actualizarVisual();
	}
}

btnReset.addEventListener("click",reiniciar);

function reiniciar(){
	contador = 0;
	actualizarVisual();
}

function actualizarVisual(){
    contadorElement.textContent = contador;
	
	if(contador === LIMIT_MAX){
		mensajeElement.textContent = "Se alcanzo el limite maximo";
        mensajeElement.className = "limite";

	}else if(contador === LIMIT_MIN){
		mensajeElement.textContent = "Se alcanzo el limite minimo";
        mensajeElement.className = "limite";

	}else if(contador === 0){
		mensajeElement.textContent = "Reinicio a Cero";
        mensajeElement.className = "normal";

	}else{
		mensajeElement.textContent = "";
        mensajeElement.className = "";
	}
}

document.addEventListener("keydown",function(event){
    console.log(event.key);

    if(event.key === "ArrowUp"){
        incrementar();
    }else if(event.key === "ArrowDown"){
        decrementar();
    }else if(event.key === " "){
        reiniciar();
    }
})