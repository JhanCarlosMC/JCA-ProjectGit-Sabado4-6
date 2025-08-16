//------------------- Variables ------------------
//let -> Variable que puede cambiar su valor
let nombre = "Jhan";
//const -> Variable que no puede cambiar su valor
const pi = 3.14;

//-----------------------------
let x; //Declaracion
console.log(x);
x = "J"; //Asignacion
console.log(x);
let y = "C"; //Inicializacion


//------------------- Tipos de Datos ------------------
//Numericos -> Number (3 3.0 -3 -3.0)
let num1 = 24; //Entero
let num2 = 24.0; //Decimal

//Texto -> String ("Hola!" 'Hola')
let cadena = "Hola a JC.";

//Logicos -> Boolean (true false)
let estado = true;
let estado2 = false;

//Objetos -> Object ({nombre: "Jhan", edad: 20})
let persona1 = {nombre: "Jhan", edad: 20};

//Arreglos -> Array-Conjunto de elementos ([1,2,3,4,5])
let arreglo1 = [1,2,3,4,5];

//Nulo -> Null
let nulo1 = null;

//Undefined -> Undefined
let undefined1;
console.log(undefined1);


//------------- Operadores Logicos -------------------
//Aritmeticos
let suma = 2+2; // +
let resta = 2-2; // -
let multiplicacion = 2*2; // *
let division = 2/2; // /
let modulo = 2%2; // %

//Relacionales
let igual = 2=="2";//true // ==
let igualdadEstricta = 2==="2";//false // ===
let diferente = 2!=2; // !=
let mayor = 2>2; // >
let menor = 2<2; // <
let mayorIgual = 2>=2; // >=
let menorIgual = 2<=2; // <=
//2+2 = 4
//"2"+"2" = "22"

//Logicos
let and = true && true; // true
let or = true || false; // true
let not = !true; // false
