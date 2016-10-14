/*
Hacer un programa que pida por teclado cuatro valores: el número de
columnas y filas de una tabla y, la altura y anchura (en pixels) de sus
celdas. Una vez tecleados estos valores, el programa pintará en la página
web una tabla HTML del nº de filas por el nº de columnas tecleadas.*/

var numCols = parseFloat(prompt("Introduce el numero de columnas: ", ""));
var numFilas = parseFloat(prompt("Introduce el numero de filas: ", ""));
var altura = parseFloat(prompt("Introduce la altura: ", ""));
var anchura = parseFloat(prompt("Introduce la anchura: ", ""));

document.write("<table border = 0 cellspacing = 2 bgcolor = 'black' width = 200>");
for (var i = 0; i < numCols; i++) {
	document.write("<tr bgcolor = 'white' height = " + altura + ">");
	for (var j = 0; j < numFilas; j++) {
		document.write("<td width = " + anchura + ">&nbsp;</td>");
	}
	document.write("</tr>");
}
document.write("</table>");