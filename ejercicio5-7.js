/*
Hacer un programa en JavaScript que usando
dos bucles anidados for imprima por pantalla
todas las tablas de multiplicar.*/
for (var i = 1; i <=10; i++) {
	document.write("<h2>Tabla del " + i + "</h2>");
	for (var j = 1; j <=10; j++) {
		var result = i * j;
		document.write(i + " x " + j + " = " + result + "<br/>");
	}
}
