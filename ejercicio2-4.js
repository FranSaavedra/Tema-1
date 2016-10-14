/*
Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."*/

var celsius = 30;
var fahrenheit = 90;

function convertToCelsius (grades) {
	return (grades - 32) * (5 / 9);
}

function convertToFahrenheit (grades) {
	return grades * (9/5) + 32;
}

document.write(celsius + "C. " + "is " + convertToFahrenheit(celsius) + "F." + "<br/>");
document.write(fahrenheit + "F. " + "is " + convertToCelsius(fahrenheit) + "C.");