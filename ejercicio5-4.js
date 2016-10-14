/*
Adapta el ejercicio 5.2 utilizando un bucle while en vez de un bucle for.*/

var numCol = parseFloat(prompt("Introduce el numero de columnas: ", ""));
var altura = parseFloat(prompt("Introduce la altura en px: ",""));
var anchura = parseFloat(prompt("Introduce la anchura en px: ",""));

document.write("<table border = '0' cellspacing = '2' bgcolor = 'black' width = " + anchura + ">");
document.write("<tr bgcolor = 'white' height = " + altura + ">");
var contador = 0;
while (contador != numCol) {
	document.write("<td width = "+ anchura + "> &nbsp;" + "</td>");
	contador++;
}
document.write("</tr>");
document.write("</table>");