/*
Escribe un programa en JavaScript que consista en adivinar un número
previamente introducido por teclado (jugador 1).
El programa pedirá tantos números como intentos erróneos haga el jugador
2. Solamente terminará cuando el jugador 2 acierte.
El programa dará pistas al jugador 2 indicándole si su número es mayor o
menor que el número a adivinar.

Usa dos variables: num_adivinar y num.
Necesitarás un bucle while.
Piénsa en la expresión condicional de deberás usar en el bucle.
Además necesitas una sentencia if para decirle al jugador 2 si su número es mayor o menor que el número a
adivinar.
Usar la sentencia alert para mostrar un mensaje al usuario por pantalla. Ejemplo: alert('El número es mayor');*/

var num_adivinar = parseFloat(prompt("Introduce el numero que hay que adivinar",""));
var num = parseFloat(prompt("Introduce un numero: ",""));
while (num != num_adivinar) {
	if (num > num_adivinar) {
		alert('El numero es menor');
	}else{
		alert('El número es mayor');
	}
	num = parseFloat(prompt("Introduce un numero: ",""));
}