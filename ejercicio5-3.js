/*
Modifica el ejercicio anterior para que las columnas impares tengan un
fondo negro y las pares fondo blanco.*/

var numCol = parseFloat(prompt("Introduce el numero de columnas: ", ""));
var altura = parseFloat(prompt("Introduce la altura en px: ",""));
var anchura = parseFloat(prompt("Introduce la anchura en px: ",""));

document.write("<table border = '0' cellspacing = '2' bgcolor = 'black' width = " + anchura + ">");
document.write("<tr bgcolor = 'white' height = " + altura + ">");
for (var i = 0; i < numCol; i++) {
	if (i % 2 == 0) {
		document.write("<td width = "+ anchura + " bgcolor = 'black'> &nbsp;" + "</td>");
	}else{
		document.write("<td width = "+ anchura + "> &nbsp;" + "</td>");
	}
}
document.write("</tr>");
document.write("</table>");