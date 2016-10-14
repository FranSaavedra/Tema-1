/*
Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".*/

var radius = 1.217;

function calculateCircumference (radius) {
	return 2 * Math.PI * radius;
}

function calculateArea (radius) {
	return Math.PI * (radius * radius);
}

document.write("The circumference is: " + calculateCircumference(radius) + " and the area is: " + calculateArea(radius));