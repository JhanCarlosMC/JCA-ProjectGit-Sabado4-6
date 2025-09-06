function fibonacci(n){
	let primero = 0;
	let segundo = 1;
	
	if(n === 1){
		console.log(primero);
		
	}else if(n === 2){
		console.log(primero);
		console.log(segundo);
		
	}else{
		console.log(primero);
		console.log(segundo);
		
		for(let i = 3; i <= n; i++){
			let tercero = primero + segundo;
			console.log(tercero);
			
			primero = segundo;
			segundo = tercero;
		}
	}
}

fibonacci(10);