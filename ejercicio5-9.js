/*
Hacer un programa que pinte un tablero de ajedrez de 8x8 casillas usando
dos for anidados.
El programa pedirá solamente el ancho de la celda que será igual que el
alto.*/

var anchoAlto = parseFloat(prompt("Introduce el ancho y alto de las celdas: ", ""));
document.write("<table border = 0 cellspacing = 2 bgcolor = 'black' width = 200>");
for (var i = 0; i < 8; i++) {
	document.write("<tr bgcolor = 'white' height = " + anchoAlto + ">");
	for (var j = 0; j < 8; j++) {
		if (i % 2 != j % 2 ) {
			document.write("<td width = " + anchoAlto + " bgcolor = 'white'>&nbsp;</td>");
		}else{
			document.write("<td width = " + anchoAlto + " bgcolor = 'black'>&nbsp;</td>");
		}
	}
	document.write("</tr>");
}
document.write("</table>");