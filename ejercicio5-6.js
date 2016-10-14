/*
Adaptar el ejercicio 4.15. al bucle DO..WHILE*/

var num_adivinar = parseFloat(prompt("Introduce el numero que hay que adivinar",""));
var num = parseFloat(prompt("Introduce un numero: ",""));
do{
	if (num == num_adivinar){
		alert('Has acertado!');
	}else if (num > num_adivinar) {
		alert('El numero es menor');
		num = parseFloat(prompt("Introduce un numero: ",""));
	}else{
		alert('El número es mayor');
		num = parseFloat(prompt("Introduce un numero: ",""));
	}
} while (num != num_adivinar);