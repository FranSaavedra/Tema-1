/*
Hacer un programa que pida por teclado tres valores: el número de columnas
de una tabla y, la altura y anchura (en pixels) de sus celdas. Una vez
tecleados estos valores, el programa pintará en la página web una tabla
HTML de una fila por el nº de columnas tecleadas.*/

var numCol = parseFloat(prompt("Introduce el numero de columnas: ", ""));
var altura = parseFloat(prompt("Introduce la altura en px: ",""));
var anchura = parseFloat(prompt("Introduce la anchura en px: ",""));

document.write("<table border = '0' cellspacing = '2' bgcolor = 'black' width = " + anchura + ">");
document.write("<tr bgcolor = 'white' height = " + altura + ">");
for (var i = 0; i < numCol; i++) {
	document.write("<td width = "+ anchura + "> &nbsp;" + "</td>");
}
document.write("</tr>");
document.write("</table>");